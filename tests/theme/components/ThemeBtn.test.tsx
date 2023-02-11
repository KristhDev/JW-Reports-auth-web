import { Mock } from 'vitest';
import { fireEvent, render } from '@testing-library/react';

import { ThemeProvider } from '../../../src/theme/context';

import { useTheme } from '../../../src/theme/hooks';

vi.mock('../../../src/theme/hooks/useTheme.ts');

const setThemeMock = vi.fn();

describe('Test in <ThemeBtn />', () => {
    (useTheme as Mock).mockReturnValue({
        theme: 'light',
        setTheme: setThemeMock
    });

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should to match snapshot', () => {
        const { container } = render(
            <ThemeProvider />
        );

        expect(container).toMatchSnapshot();
    });

    it('should call setTheme when clicked', () => {
        const { getByRole } = render(
            <ThemeProvider />
        );

        const btn = getByRole('button');
        fireEvent.click(btn);

        expect(setThemeMock).toHaveBeenCalledTimes(1);
        expect(setThemeMock).toHaveBeenCalledWith('dark', 'dark');
    });
});