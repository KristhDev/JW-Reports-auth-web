import { render, screen, fireEvent } from '@testing-library/react';

import { EyeBtn } from '../../../src/ui/components';

const onToggleMock = vi.fn();

describe('Test in <EyeBtn /> component', () => {
    beforeEach(() => {
        render(
            <EyeBtn
                onToggle={ onToggleMock }
                value
            />
        );

        vi.clearAllMocks();
    });

    it('should to match the snapshot', () => {
        const { container } = render(
            <EyeBtn
                onToggle={ onToggleMock }
                value
            />
        );

        expect(container).toMatchSnapshot();
    });

    it('should render eye icon when value is false', () => {
        render(
            <EyeBtn
                onToggle={ onToggleMock }
                value={ false }
            />
        );

        const icon = screen.getByTestId('eye-icon');
        expect(icon).toBeTruthy();
    });

    it('should call the onToggle function when clicked', () => {
        const button = screen.getByRole<HTMLButtonElement>('button');
        fireEvent.click(button);

        expect(onToggleMock).toHaveBeenCalledTimes(1);
        expect(onToggleMock).toHaveBeenCalledWith(false);
    });
});