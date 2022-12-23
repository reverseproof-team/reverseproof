import type { PageLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

export const load: PageLoad = async (event) => {
	const { supabaseClient } = await getSupabase(event);
	if (!supabaseClient) {
		return { error: 'No client' };
	}
	return { status: 'OK' };
};
