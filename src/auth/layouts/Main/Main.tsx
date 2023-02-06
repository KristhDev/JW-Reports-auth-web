import { FC, PropsWithChildren } from 'react';

import './styles.scss';

const Main: FC<PropsWithChildren<{ title: string }>> = ({ title, children }) => {
    return (
        <div className="container">
            { children }
        </div>
    );
}

export default Main;