import { act, renderHook } from '@testing-library/react';

import { ThemeProvider } from '../../../src/theme/context';

import { useTheme } from '../../../src/theme/hooks';

describe('Test in useTheme hook', () => {
    const renderHookTheme = () => {
        return renderHook(
            () => useTheme(),
            { wrapper: ({ children }) => <ThemeProvider>{ children }</ThemeProvider> }
        );
    }


    it('should return the respective props', () => {
        const { result } = renderHookTheme();

        expect(result.current).toEqual({
            theme: expect.any(String),
            setTheme: expect.any(Function)
        });
    });

    it('should change theme with setTheme', () => {
        const { result } = renderHookTheme();

        act(() => {
            result.current.setTheme('dark', 'dark');
        });

        expect(result.current.theme).toBe('dark');
    });
});