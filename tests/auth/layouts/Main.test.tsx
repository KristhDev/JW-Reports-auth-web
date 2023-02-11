import { render } from '@testing-library/react';

import { Main } from '../../../src/auth/layouts';

describe('Test in <Main /> Layout', () => {
    it('should to match snapshot', () => {
        const { container } = render(
            <Main title="Title Test" />
        );

        expect(container).toMatchSnapshot();
    });

    it('should render respective props', () => {
        const { getByRole } = render(
            <Main
                title="Title Test"
            >
                <h3>SubTitle test</h3>
            </Main>
        );

        const titleHeader = getByRole('heading', { level: 1 });
        const subTitleHeader = getByRole('heading', { level: 3 });

        expect(titleHeader).toBeTruthy();
        expect(titleHeader.innerHTML).toBe('Title Test');
        expect(subTitleHeader).toBeTruthy();
        expect(subTitleHeader.innerHTML).toBe('SubTitle test');
    });
});