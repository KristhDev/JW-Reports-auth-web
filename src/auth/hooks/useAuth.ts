import { supabase } from '../../supabase';

const useAuth = () => {
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