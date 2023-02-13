import { STUDENTS } from '$lib/server/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	let students = STUDENTS;
	let search = url.searchParams.get('search');

	if (search) {
		search = search.toLowerCase();
		students = students.filter((s) => s.name.toLowerCase().includes(search));
	}

	return { students };
}
