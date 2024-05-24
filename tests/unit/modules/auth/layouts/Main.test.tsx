import { render } from '@testing-library/react';

/* Modules */
import { Main } from '../../../../../src/modules/auth';

const renderLayout = () => render(
    <Main title="Title Test">
        <h3>SubTitle test</h3>
    </Main>
);

describe('Test in <Main /> Layout', () => {
    it('should to match snapshot', () => {
        const { container } = renderLayout();
        expect(container).toMatchSnapshot();
    });

    it('should render respective props', () => {
        const { getByRole } = renderLayout();

        const titleHeader = getByRole('heading', { level: 1 });
        const subTitleHeader = getByRole('heading', { level: 3 });

        expect(titleHeader).toBeTruthy();
        expect(titleHeader.innerHTML).toBe('Title Test');
        expect(subTitleHeader).toBeTruthy();
        expect(subTitleHeader.innerHTML).toBe('SubTitle test');
    });
});