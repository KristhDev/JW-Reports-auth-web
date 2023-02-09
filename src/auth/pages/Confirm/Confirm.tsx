import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/* Layouts */
import { Main } from '../../layouts';

/* Styles */
import './styles.scss';

/**
 * This page is responsible for displaying successful
 * authentication confirmations. 
 */
const Confirm = () => {
    const [ message, setMessage ] = useState<string>('');
    const [ type, setType ] = useState<string>('');

    const { hash } = useLocation();
    const navigate = useNavigate();

    const queryParameters = new URLSearchParams(hash.split('#')[1]);

    /**
     * Effect to extract the message or type from the query parameters.
     * In case these parameters are not found, the user is 
     * removed from the page.
     */
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