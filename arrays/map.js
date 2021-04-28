// function map

const arr = [10, 50, 34, 3, 4, 90, 40, 2, 12];

const doubleNumbers = arr.map((value) => value * 2);
console.log(doubleNumbers);

const people = [
	{ name: 'Luan', age: 17 },
	{ name: 'Matheus', age: 10 },
	{ name: 'Guilherme', age: 50 },
	{ name: 'Ana', age: 35 },
	{ name: 'Mariana', age: 24 },
	{ name: 'Renata', age: 40 },
	{ name: 'João', age: 15 },
	{ name: 'Fernades', age: 60 },
];

const namePeople = people.map((obj) => obj.name);
console.log(namePeople);

/** Way 1 */
const agePeople1 = people.map((obj) => {
	const newObj = { ...obj };
	delete newObj.name;
	return newObj;
});
// console.log(agePeople1);

/** Way 2 */
const agePeople2 = people.map((obj) => ({ age: obj.age }));
// console.log(agePeople2);

const idPeople = people.map((obj, index) => {
	const newObj = { ...obj };
	newObj.id = index;
	return newObj;
});
// console.log("..", idPeople);
// console.log("Original array:", people);
