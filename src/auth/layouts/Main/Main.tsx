import { FC, PropsWithChildren } from 'react';

import { Title } from '../../../ui/components';

import './styles.scss';

const Main: FC<PropsWithChildren<{ title: string }>> = ({ title, children }) => {
    return (
        <div className="container">
            <Title text={ title } />

            { children }
        </div>
    );
}

export default Main;