import { useLocation } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { IoKeySharp } from 'react-icons/io5';
import { object, ref, string } from 'yup';

import { Button, FormField } from '../../../ui/components';

import './styles.scss';

export const ResetPasswordForm = () => {
    const { hash } = useLocation();
    const queryParameters = new URLSearchParams(hash.split('#')[1]);
    Array.from(queryParameters.entries()).map(console.log);

    const resetPasswordSchema = object().shape({
        password: string()
            .min(6, 'La nueva contraseña debe tener al menos 6 caracteres.')
            .required('La nueva contraseña no puede estar vacía.'),
        confirmPassword: string()
            .oneOf([ ref('password'), null ], 'Las contraseñas no coinciden.')
            .required('La confirmación de la contraseña es requerida.'),
    });

    return (
        <div className="form">
            <Formik
                initialValues={{
                    password: '',
                    confirmPassword: '',
                }}
                onSubmit={ console.log }
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