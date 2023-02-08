import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Main } from '../../layouts';

import './styles.scss';

const Confirm = () => {
    const [ message, setMessage ] = useState<string>('');
    const [ type, setType ] = useState<string>('');

    const { hash } = useLocation();
    const navigate = useNavigate();

    const queryParameters = new URLSearchParams(hash.split('#')[1]);

    useEffect(() => {
        if (queryParameters.get('message')) {
            setMessage(queryParameters.get('message')!);
        }
        else if (queryParameters.get('type')) {
            setType(queryParameters.get('type')!);
        }
        else navigate('/not-found');
    }, []);

    return (
        <Main title="Confirmación exitosa">
            <div className="content">
                <h2>
                    { (type === 'signup')
                        ? 'Haz verificado tu cuenta correctamente, abre la aplicación e ingresa con tu cuenta.'
                        : message
                    }
                </h2>
            </div>
        </Main>
    );
}

export default Confirm;