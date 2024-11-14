export async function load({ locals: { supabase } }) {
	const { data } = await supabase.from('dishes').select();

	return {
		dishes: data ?? []
	};
}
