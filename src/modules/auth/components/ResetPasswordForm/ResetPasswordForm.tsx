import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';

/* Components */
import { Button, EyeBtn, FormField } from '../../../ui';

/* Hooks */
import { useAuth } from '../../hooks';

/* Schemas */
import { resetPasswordSchema } from './schemas';

/* Styles */
import './styles.scss';

/**
 * This component is responsible for resetting the password of a user. It uses React hooks and Formik
 * to handle form validation and submission. The component also uses the useAuth hook to handle the
 * password update functionality.
 *
 * @return {JSX.Element} The JSX element representing the ResetPasswordForm component.
 */
export const ResetPasswordForm = (): JSX.Element => {
    const [ refreshToken, setRefreshToken ] = useState<string>('');
    const [ error, setError ] = useState<string>('');

    const [ showPassword, setShowPassword ] = useState<boolean>(false);
    const [ showPasswordConfirm, setShowPasswordConfirm ] = useState<boolean>(false);

    const location = useLocation();
    const navigate = useNavigate();

    const queryParameters = new URLSearchParams(location.hash.split('#')[1]);

    const { updatePassword } = useAuth();

    /**
     * The function handleSubmit takes a string as an argument and returns a promise that resolves to a
     * string.
     * @param {string} password - string - the new password
     */
    const handleSubmit = async (password: string) => {
        const errorMessage = await updatePassword(password, refreshToken!)
        if (errorMessage) setError(errorMessage);
    }

    /**
     * Effect to set the refresh token from the URL.
     * In case the parameter does not come, the user is removed 
     * from the page.
     */
    useEffect(() => {
        if (queryParameters.get('refresh_token')) setRefreshToken(queryParameters.get('refresh_token')!);
        else navigate('/not-found');
    }, []);

    return (
        <div className="form">
            <Formik
                initialValues={{
                    password: '',
                    confirmPassword: '',
                }}
                onSubmit={ ({ password }) => handleSubmit(password) }
                validateOnMount
                validationSchema={ resetPasswordSchema }
            >
                { ({ isSubmitting }) => (
                    <Form
                        autoComplete="off"
                        className="form__container"
                        data-testid="form"
                    >

                        {/* New password field */}
                        <FormField
                            label="Nueva contraseña:"
                            name="password"
                            type={ (showPassword) ? 'text' : 'password' }
                            placeholder="Ingrese su nueva contraseña"
                            icon={
                                <EyeBtn 
                                    onToggle={ setShowPassword }
                                    value={ showPassword }
                                />
                            }
                        />

                        {/* Confirm password field */}
                        <FormField
                            label="Confirmar contraseña:"
                            name="confirmPassword"
                            type={ (showPasswordConfirm) ? 'text' : 'password' }
                            placeholder="Confirme su nueva contraseña"
                            icon={
                                <EyeBtn 
                                    onToggle={ setShowPasswordConfirm }
                                    value={ showPasswordConfirm }
                                />
                            }
                        />

                        {/* Submit */}
                        <Button
                            disabled={ isSubmitting }
                            loading={ isSubmitting }
                            style={{ marginTop: '2rem' }}
                            type="submit"
                        >
                            Restablecer
                        </Button>
                    </Form>
                ) }
            </Formik>

            {/* Error when submit form */}
            { (error.trim().length > 0) && (
                <p className="form__error">{ error }</p>
            ) }
        </div>
    );
}