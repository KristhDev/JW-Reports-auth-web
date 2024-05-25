import { object, ref, string } from 'yup';

/* Schema validation for new password */
export const resetPasswordSchema = object().shape({
    password: string()
        .min(6, 'La nueva contraseña debe tener al menos 6 caracteres.')
        .required('La nueva contraseña no puede estar vacía.'),

    confirmPassword: string()
        .oneOf([ ref('password'), undefined ], 'Las contraseñas no coinciden.')
        .required('La confirmación de la contraseña es requerida.'),
});