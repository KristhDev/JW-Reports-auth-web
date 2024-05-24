import { Mock } from 'vitest';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/* Mocks */
import { setThemeMock } from '../../../../mocks';

/* Modules */
import { ThemeProvider, useTheme } from '../../../../../src/modules/theme';

vi.mock('../../../../../src/modules/theme/hooks/useTheme.ts');

const renderComponent = () => render(<ThemeProvider />);

describe('Test in <ThemeBtn />', () => {
    (useTheme as Mock).mockReturnValue({
        theme: 'light',
        setTheme: setThemeMock
    });

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should to match snapshot', () => {
        const { container } = renderComponent();
        expect(container).toMatchSnapshot();
    });

    it('should call setTheme when clicked', async () => {
        const { getByRole } = renderComponent();

        const btn = getByRole('button');
        await userEvent.click(btn);

        expect(setThemeMock).toHaveBeenCalledTimes(1);
        expect(setThemeMock).toHaveBeenCalledWith('dark', 'dark');
    });
});