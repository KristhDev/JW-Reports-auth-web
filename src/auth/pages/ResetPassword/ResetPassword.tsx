/* Layouts */
import { Main } from '../../layouts';

/* Components */
import { ResetPasswordForm } from '../../components';

/**
 * This is the page that groups the components to reset 
 * the password.
 */
const ResetPassword = () => {
    return (
        <Main title="Restablecimiento de contraseña">
            <ResetPasswordForm />
        </Main>
    );
}

export default ResetPassword;