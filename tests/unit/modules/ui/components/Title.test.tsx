import { render, screen } from '@testing-library/react';

/* Modules */
import { Title } from '../../../../../src/modules/ui';

const titleText = 'Test title';

const renderComponent = () => render(
    <Title
        classNameContainer="container-test"
        classNameText="text-test"
        text={ titleText }
    />
);

describe('Test in <Title /> component', () => {
    it('should to match the snapshot', () => {
        const { container } =  renderComponent();
        expect(container).toMatchSnapshot();
    });

    it('should render respective props', () => {
        renderComponent();

        const containerElement = screen.getByTestId('title-container');
        const textElement = screen.getByRole('heading');

        expect(containerElement.className).toContain('container-test');
        expect(textElement.className).toContain('text-test');
        expect(textElement.innerHTML).toBe(titleText);
    });
});