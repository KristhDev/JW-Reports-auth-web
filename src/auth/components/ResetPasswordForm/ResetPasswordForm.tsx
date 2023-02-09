import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { object, ref, string } from 'yup';

/* Components */
import { Button, EyeBtn, FormField } from '../../../ui/components';

/* Hooks */
import { useAuth } from '../../hooks';

/* Styles */
import './styles.scss';

/**
 * This component is responsible for resetting the
 * password of a user.
 */
export const ResetPasswordForm = () => {
    const [ refreshToken, setRefreshToken ] = useState<string>('');
    const [ error, setError ] = useState<string>('');

    const [ showPassword, setShowPassword ] = useState<boolean>(false);
    const [ showPasswordConfirm, setShowPasswordConfirm ] = useState<boolean>(false);

    const { hash } = useLocation();
    const navigate = useNavigate();

    const queryParameters = new URLSearchParams(hash.split('#')[1]);

    const { updatePassword } = useAuth();

    /* Schema validation for new password */
    const resetPasswordSchema = object().shape({
        password: string()
            .min(6, 'La nueva contraseña debe tener al menos 6 caracteres.')
            .required('La nueva contraseña no puede estar vacía.'),
        confirmPassword: string()
            .oneOf([ ref('password'), null ], 'Las contraseñas no coinciden.')
            .required('La confirmación de la contraseña es requerida.'),
    });

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
        if (queryParameters.get('refresh_token')) {
            setRefreshToken(queryParameters.get('refresh_token')!);
        }
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
                { () => (
                    <Form className="form__container">

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
                            type="submit"
                            style={{ marginTop: '2rem' }}
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