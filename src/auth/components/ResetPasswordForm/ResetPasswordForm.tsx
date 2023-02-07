import { Form, Formik } from 'formik';
import { IoKeySharp } from 'react-icons/io5';

import { FormField } from '../../../ui/components';

import './styles.scss';

export const ResetPasswordForm = () => {
    return (
        <div className="form">
            <Formik
                initialValues={{
                    password: '',
                    confirmPassword: '',
                }}
                onSubmit={ console.log }
            >
                { () => (
                    <Form className="form__container">
                        <FormField
                            label="Nueva contraseña:"
                            name="password"
                            type="password"
                            placeholder="Ingrese su nueva contraseña"
                            icon={
                                <IoKeySharp size={ 25 } />
                            }
                        />

                        <FormField
                            label="Confirmar contraseña:"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirme su nueva contraseña"
                            icon={
                                <IoKeySharp size={ 25 } />
                            }
                        />
                    </Form>
                ) }
            </Formik>
        </div>
    );
}