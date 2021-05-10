// Travando o contexto:

function count(init) {
	let counter = init;

	return function () {
		counter++;
		return counter;
	};
}

/*
const funcA = count(0);
const funcB = count(22);

for (let index = 0; index < 2; index++) {
	console.log(funcA());
}

console.log(funcB(), funcA(), funcB());
*/

function people(name = 'fulano', age = 20) {
	return {
		getName: function () {
			return name;
		},

		setName: function (value) {
			name = value;
		},

		getAge: function () {
			return age;
		},

		setAge: function (value) {
			age = value;
		},

		incrementAge: function () {
			return age++;
		},
	};
}

const maria = people('Maria', 17);
/* console.log(maria); */
console.log(maria.getName());
console.log(maria.getAge());
maria.incrementAge();
console.log(maria.getAge());
maria.setAge(45);
console.log(maria.getAge());
