// filter

// Mission: returning the greatest numbers than 10
const arr = [10, 50, 34, 3, 4, 90, 40, 2, 12];
let list = [];

// //Using loop for...
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 10) {
//     list.push(arr[i]);
//   }
// }

// console.log(list);

// //Using filter function

// /** Filter function | Long form */
// function callbackFilter(value, index, array) {
//   if (value > 10) {
//     return value;
//   }
// }

// const filteredArr1 = arr.filter(callbackFilter);
// console.log("Filtered numbers:", filteredArr1);

// /** Filter function | Short form */
// const filteredArr2 = arr.filter((value) => value > 10);
// console.log(filteredArr2);
// console.log("-------------------------");

// Returnig

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

const filter = people.filter((obj, index) => index == 4);
console.log(filter);
const filterOfFilter = filter[0].name;
console.log(filterOfFilter);

// const greatestNamePeople = people.filter((obj) => obj.name.length > 7);
// console.log(greatestNamePeople);

// console.log("-------------------");

// const greatestAgePeople = people.filter((obj) => obj.age < 20);
// console.log(greatestAgePeople);

// console.log("-------------------");

// const lastLetterPeople = people.filter((obj) =>
//   obj.name.toLowerCase().endsWith("s")
// );
// console.log(lastLetterPeople);
