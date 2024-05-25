import { render } from '@testing-library/react';

/* Modules */
import { Spinner } from '../../../../../src/modules/ui';

describe('Test in <Spinner /> component', () => {
    it('should to match the snapshot', () => {
        const { container } = render(<Spinner />);
        expect(container).toMatchSnapshot();
    });
});