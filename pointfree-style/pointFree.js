// POINT-FREE STYLE:
// Utilizar uma função sem utilizar a passagem de parâmetros/argumentos

/**
 * Traditional ways to create functions in JS
 */
// function declaration
// function sum(a, b) {
//   return a + b;
// }

// function expression
// const sum2 = function (a, b) {
//   return a + b;
// }

// Arrow function
// const sum3 = (a, b) => a + b;

const add = (a) => {
	return (b) => {
		return a + b;
	};
};

console.group('Add');
const increment = add(1);
const res = increment(2);
console.log(res);
console.log(increment(5));
console.groupEnd();

console.group('Multiply');

const multiply = (a) => {
	return (b) => {
		return a * b;
	};
};

const double = multiply(2);
console.log(double(4));
console.log(double(10));
console.log(multiply(1)(2));
console.log(multiply(1)(5));
console.log(multiply(7)(9));
console.log(multiply(8)(9));

console.groupEnd();
console.group('PointFree no arguments');

const numbers = [8, 4, 5, 10, 5, 9];

const res2 = numbers.map((value) => value * 2);
const res3 = numbers.map(double);
console.log(numbers);
console.log(res2);
console.log('pointfree ', res3);

const pair = (n) => {
	return n % 2 === 0; // logical return
};

const odd = (n) => {
	return n % 2 !== 0; // logical return
};

const label = 'time';
console.time(label);
const pairsNumbers = numbers.filter(pair);
const oddsNumbers = numbers.filter(odd);
console.timeLog(label);
console.log(pairsNumbers);
console.log(oddsNumbers);

console.groupEnd();
console.timeEnd(label);
