import { FC, PropsWithChildren } from 'react';

/* Components */
import { Title } from '../../../ui';

/**
 * Renders the main layout component with a title and children.
 *
 * @param {PropsWithChildren<{ title: string }>} props - The props for the component.
 * @param {string} props.title - The title of the page.
 * @param {ReactNode} props.children - The children(JSX element) of the page.
 * @return {JSX.Element} The rendered main layout component.
 */
const Main: FC<PropsWithChildren<{ title: string }>> = ({ title, children }): JSX.Element => {
    return (
        <div className="container">
            <Title text={ title } />

            { children }
        </div>
    );
}

export default Main;