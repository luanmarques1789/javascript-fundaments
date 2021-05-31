/** Normal function */
function sum(num1, num2) {
	return num1 + num2;
}

const res = sum(1, 2);
console.log(res);

/** Currying function
 *  Receiving parcial values
 */
function mult(num1) {
	return function (num2) {
		return num1 * num2;
	};
}

const firstStep = mult(3);
const lastStep = firstStep(10);
console.log(lastStep);

// Shorthand
console.log(mult(4)(5));

/** Using arrow function */

const funcArrow = (n1) => (n2) => (n3) => {
	return n1 + n2 + n3;
};

console.log(funcArrow(5)(3)(2));
