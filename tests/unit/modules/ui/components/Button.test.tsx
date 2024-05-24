import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/* Mocks */
import { onClickMock } from '../../../../mocks/ui';

/* Modules */
import { Button } from '../../../../../src/modules/ui';

const btnText = 'Test text';

const renderComponent = () => render(
    <Button
        className="test-class"
        onClick={ onClickMock }
        type="button"
    >
        { btnText }
    </Button>
)

describe('Test in <Button /> component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should to match the snapshot', () => {
        const { container } = renderComponent();
        expect(container).toMatchSnapshot();
    });

    it('should render respective props', () => {
        renderComponent();

        const btn = screen.getByRole<HTMLButtonElement>('button');

        expect(btn.className).toContain('test-class');
        expect(btn.innerHTML).toBe(btnText);
        expect(btn.type).toBe('button');
    });

    it('should call onClick when clicked', async () => {
        renderComponent();

        const btn = screen.getByRole<HTMLButtonElement>('button');
        await userEvent.click(btn);

        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});