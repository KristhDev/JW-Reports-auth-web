import { defineConfig, mergeConfig } from 'vitest/config';
import vitestConfig from './vitest.config';

export default mergeConfig(vitestConfig, defineConfig({
    test: {
        bail: 1,
        coverage: {
            provider: 'v8',
            reporter: [ 'text', 'json', 'html' ],
            reportsDirectory: './tests/coverage'
        },
        environment: 'jsdom',
        exclude: [
            '**/node_modules/**',
            '**/tests/coverage/**',
            '**/tests/mocks/**',
            '**/tests/setups/**',
            '**/__snapshots__/**'
        ],
        globals: true,
        reporters: [ 'verbose' ],
        setupFiles: [ './tests/setups/setup.ts' ]
    }
}));