import { renderHook } from '@testing-library/react';

/* Theme */
import { ThemeProvider, useTheme } from '../../src/modules/theme';

export const renderUseTheme = () => {
    return renderHook(
        () => useTheme(),
        { wrapper: ({ children }) => <ThemeProvider>{ children }</ThemeProvider> }
    );
}