/* Supabase */
import { supabase } from '../../supabase';

/**
 * Hooks to manage the user authentication.
 */
const useAuth = () => {
    /**
     * This function is responsible for updating the user's password, for this it refreshes the
     * session that was sent with the token, with the session already active it updates the
     * userpassword and then logs out.
     * @param {string} newPassword - The new password you want to set
     * @param {string} token - The refresh token that was sent to the user's email.
     * @returns The error message.
     */
    const updatePassword = async (newPassword: string, token: string) => {
        const { error } = await supabase.auth.refreshSession({ refresh_token: token });

        if (error) {
            console.error(error);
            return error.message;
        }

        const { error: passError } = await supabase.auth.updateUser({ password: newPassword });

        if (passError) {
            console.error(passError);
            return passError.message;
        }

        const { error: logoutError } = await supabase.auth.signOut();

        if (logoutError) {
            console.error(logoutError);
            return logoutError.message;
        }

        window.location.reload();
    }

    return {
        updatePassword
    }
}

export default useAuth;