import { Navigate, useLocation } from 'react-router-dom';

import { Main } from '../../layouts';

const Confirm = () => {
    const { hash } = useLocation();
    const queryParameters = new URLSearchParams(hash.split('#')[1]);

    if (!queryParameters.get('message')) {
        return <Navigate to='not-found' />
    }

    return (
        <Main title="Confirmación exitosa">
        </Main>
    );
}

export default Confirm;