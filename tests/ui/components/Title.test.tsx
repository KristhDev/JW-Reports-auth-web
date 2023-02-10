import { render, screen } from '@testing-library/react';

import { Title } from '../../../src/ui/components';

const titleText = 'Test title';

describe('Test in <Title /> component', () => {
    beforeEach(() => {
        render(
            <Title
                classNameContainer="container-test"
                classNameText="text-test"
                text={ titleText }
            />
        );
    });

    it('should to match the snapshot', () => {
        const { container } =  render(
            <Title text={ titleText } />
        );

        expect(container).toMatchSnapshot();
    });

    it('should render respective props', () => {
        const containerElement = screen.getByTestId('title-container');
        const textElement = screen.getByRole('heading');

        expect(containerElement.className).toContain('container-test');
        expect(textElement.className).toContain('text-test');
        expect(textElement.innerHTML).toBe(titleText);
    });
});