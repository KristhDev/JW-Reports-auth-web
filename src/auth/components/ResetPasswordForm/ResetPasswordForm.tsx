import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { IoKeySharp } from 'react-icons/io5';
import { object, ref, string } from 'yup';

import { Button, FormField } from '../../../ui/components';

import { useAuth } from '../../hooks';

import './styles.scss';

export const ResetPasswordForm = () => {
    const [ refreshToken, setRefreshToken ] = useState<string>('');

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
                onSubmit={ ({ password }) => updatePassword(password, refreshToken!) }
                validateOnMount
                validationSchema={ resetPasswordSchema }
            >
                { () => (
                    <Form className="form__container">
                        <FormField
                            label="Nueva contraseña:"
                            name="password"
                            type="password"
                            placeholder="Ingrese su nueva contraseña"
                            icon={ <IoKeySharp size={ 25 } /> }
                        />

                        <FormField
                            label="Confirmar contraseña:"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirme su nueva contraseña"
                            icon={ <IoKeySharp size={ 25 } /> }
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
        </div>
    );
}