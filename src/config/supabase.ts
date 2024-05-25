import { createClient } from '@supabase/supabase-js';

/* Utils */
import { getEnv } from '../utils/env';

const { VITE_SUPABASE_APY_KEY, VITE_SUPABASE_URL } = getEnv();

/* Creating a client that will be used to connect to the database. */
export const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_APY_KEY);