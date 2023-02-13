import { faker } from '@faker-js/faker';

export const STUDENTS = Array.from({ length: 50 }, (_, index) => ({
	id: index.toString(),
	name: `${faker.name.firstName()} ${faker.name.lastName()}`,
	info: faker.lorem.paragraph()
}));
