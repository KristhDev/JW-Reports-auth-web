import { render } from '@testing-library/react';

/* Modules */
import { NotFound } from '../../../../../src/modules/ui';

describe('Test in <NotFound /> page', () => {
    it('should to match the snapshot', () => {
        const { container } = render(<NotFound />);
        expect(container).toMatchSnapshot();
    });
});