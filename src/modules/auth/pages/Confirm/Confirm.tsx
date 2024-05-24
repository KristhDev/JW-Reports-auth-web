import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/* Layouts */
import { Main } from '../../layouts';

/* Styles */
import './styles.scss';

/**
 * This function component is responsible for displaying successful
 * authentication confirmations. It extracts the message or type from the
 * query parameters and displays the appropriate message on the page.
 *
 * @return {JSX.Element} The JSX element representing the confirmation page.
 */
const Confirm = (): JSX.Element => {
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
        if (queryParameters.get('message')) setMessage(queryParameters.get('message')!);
        else if (queryParameters.get('type')) setType(queryParameters.get('type')!);
        else navigate('/not-found');
    }, []);

    return (
        <Main title="Confirmación exitosa">
            <div className="content">
                <h2>
                    { (type === 'signup')
                        ? 'Has verificado tu cuenta correctamente, abre la aplicación e ingresa con tu cuenta.'
                        : message
                    }
                </h2>
            </div>
        </Main>
    );
}

export default Confirm;