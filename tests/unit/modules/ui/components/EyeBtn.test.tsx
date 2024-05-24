import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/* Mocks */
import { onToggleMock } from '../../../../mocks';

/* Modules */
import { EyeBtn } from '../../../../../src/modules/ui';

const renderComponent = (value: boolean = true) => render(
    <EyeBtn
        onToggle={ onToggleMock }
        value={ value }
    />
)

describe('Test in <EyeBtn /> component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should to match the snapshot', () => {
        const { container } = renderComponent();
        expect(container).toMatchSnapshot();
    });

    it('should render eye icon when value is false', () => {
        renderComponent(false);

        const icon = screen.getByTestId('eye-icon');
        expect(icon).toBeTruthy();
    });

    it('should call the onToggle function when clicked', async () => {
        renderComponent();

        const button = screen.getByRole<HTMLButtonElement>('button');
        await userEvent.click(button);

        expect(onToggleMock).toHaveBeenCalledTimes(1);
        expect(onToggleMock).toHaveBeenCalledWith(false);
    });
});