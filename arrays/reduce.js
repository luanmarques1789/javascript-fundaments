const arr = [10, 50, 34, 3, 4, 90, 61, 2, 12]; // sum: 245, multiply: 17.625.600.000

const sumNum = arr.reduce(
	(accumulator, currentValue, currentIndex, array) =>
		(accumulator += currentValue)
);

console.log('sumNum:', sumNum);

const multiplyNum = arr.reduce(
	(accumulator, currentValue) => (accumulator *= currentValue)
);

console.log('multiplyNum:', multiplyNum);

const pairsNum = arr.reduce((accumulator, currentValue) => {
	if (currentValue % 2 === 0) accumulator.push(currentValue);
	return accumulator;
}, []);
console.log('pairsNum:', pairsNum);

const people = [
	{ name: 'Luan', age: 17 },
	{ name: 'Matheus', age: 10 },
	{ name: 'Guilherme', age: 70 },
	{ name: 'Ana', age: 35 },
	{ name: 'Mariana', age: 24 },
	{ name: 'Renata', age: 60 },
	{ name: 'João', age: 15 },
	{ name: 'Fernades', age: 40 },
];

const olderPeople = people.reduce((accumulator, currentValue) => {
	if (accumulator.age > currentValue.age) {
		return accumulator;
	} else {
		return currentValue;
	}
});

console.log(olderPeople.name);
