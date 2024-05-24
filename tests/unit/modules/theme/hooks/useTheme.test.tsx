import { act } from '@testing-library/react';

/* Setups */
import { renderUseTheme } from '../../../../setups';

describe('Test in useTheme hook', () => {
    it('should return the respective props', () => {
        const { result } = renderUseTheme();

        expect(result.current).toEqual({
            theme: expect.any(String),
            setTheme: expect.any(Function)
        });
    });

    it('should change theme with setTheme', () => {
        const { result } = renderUseTheme();

        act(() => {
            result.current.setTheme('dark', 'dark');
        });

        expect(result.current.theme).toBe('dark');
    });
});