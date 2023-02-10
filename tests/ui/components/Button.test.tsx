import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from '../../../src/ui/components';

const btnText = 'Test text';
const onClickMock = vi.fn();

describe('Test in <Button /> component', () => {
    beforeEach(() => {
        render(
            <Button
                className="test-class"
                onClick={ onClickMock }
                type="button"
            >
                { btnText }
            </Button>
        );

        vi.clearAllMocks();
    });

    it('should to match the snapshot', () => {
        const { container } = render(
            <Button
                onClick={ onClickMock }
                type="button"
            >
                { btnText }
            </Button>
        );

        expect(container).toMatchSnapshot();
    });

    it('should render respective props', () => {
        const btn = screen.getByRole<HTMLButtonElement>('button');

        expect(btn.className).toContain('test-class');
        expect(btn.innerHTML).toBe(btnText);
        expect(btn.type).toBe('button');
    });

    it('should call onClick when clicked', () => {
        const btn = screen.getByRole<HTMLButtonElement>('button');
        fireEvent.click(btn);

        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});