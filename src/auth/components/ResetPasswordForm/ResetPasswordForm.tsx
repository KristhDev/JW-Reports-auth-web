import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { object, ref, string } from 'yup';

import { Button, EyeBtn, FormField } from '../../../ui/components';

import { useAuth } from '../../hooks';

import './styles.scss';

export const ResetPasswordForm = () => {
    const [ refreshToken, setRefreshToken ] = useState<string>('');
    const [ error, setError ] = useState<string>('');

    const [ showPassword, setShowPassword ] = useState<boolean>(false);
    const [ showPasswordConfirm, setShowPasswordConfirm ] = useState<boolean>(false);

    const { hash } = useLocation();
    const navigate = useNavigate();

    const queryParameters = new URLSearchParams(hash.split('#')[1]);

    const { updatePassword } = useAuth();

    const resetPasswordSchema = object().shape({
        password: string()
            .min(6, 'La nueva contraseña debe tener al menos 6 caracteres.')
            .required('La nueva contraseña no puede estar vacía.'),
        confirmPassword: string()
            .oneOf([ ref('password'), null ], 'Las contraseñas no coinciden.')
            .required('La confirmación de la contraseña es requerida.'),
    });

    const handleSubmit = async (password: string) => {
        const errorMessage = await updatePassword(password, refreshToken!)
        if (errorMessage) setError(errorMessage);
    }

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

                        <Button
                            type="submit"
                            style={{ marginTop: '2rem' }}
                        >
                            Restablecer
                        </Button>
                    </Form>
                ) }
            </Formik>

            { (error.trim().length > 0) && (
                <p className="form__error">{ error }</p>
            ) }
        </div>
    );
}