/* Layouts */
import { Main } from '../../layouts';

/* Components */
import { ResetPasswordForm } from '../../components';

/**
 * Renders the ResetPassword component, which displays the ResetPasswordForm component
 * wrapped in a Main component with the title "Restablecimiento de contraseña".
 *
 * @return {JSX.Element} The rendered ResetPassword component.
 */
const ResetPassword = (): JSX.Element => {
    return (
        <Main title="Restablecimiento de contraseña">
            <ResetPasswordForm />
        </Main>
    );
}

export default ResetPassword;