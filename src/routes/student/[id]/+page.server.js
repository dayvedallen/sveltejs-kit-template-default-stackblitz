import { STUDENTS } from '$lib/server/db';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const student = STUDENTS.find((s) => s.id === params.id);

	if (!student) throw error(404);

	return { student };
}
