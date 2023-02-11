import { FC, PropsWithChildren } from 'react';

/* Components */
import { Title } from '../../../ui/components';

/**
 * This is the main layout for the authentication pages.
 * @param {PropsWithChildren<{ title: string }>} props { title: string, children: ReactNode } - This
 * a props object for the component.
 * - title: The title of the page.
 * - children: The children(Jsx element) of the page.
 */
const Main: FC<PropsWithChildren<{ title: string }>> = ({ title, children }) => {
    return (
        <div className="container">
            <Title text={ title } />

            { children }
        </div>
    );
}

export default Main;