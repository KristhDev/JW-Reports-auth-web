import { render } from '@testing-library/react';

import { NotFound } from '../../../src/ui/pages';

describe('Test in <NotFound /> page', () => {
    it('should to match the snapshot', () => {
        const { container } = render(<NotFound />);
        expect(container).toMatchSnapshot();
    });
});