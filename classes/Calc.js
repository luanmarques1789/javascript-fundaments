/* class Calc {
	constructor(num1, num2) {
		this.num1 = num1;
		this.num2 = num2;
	}

	sum() {
		return this.num1 + this.num2;
	}
} */

/**
 *	It doesn't work with arrow functions,
 *  because they doesn't have context (i.e., this)
 */

const Calc = function (num1, num2) {
	this.num1 = num1;
	this.num2 = num2;

	return {
		sum: () => {
			return this.num1 + this.num2;
		},
	};
};

const calc = new Calc(2, 2);
console.log(calc.sum());

/**
 * bind doens't work in class functions,
 * because they are stateless
 */

const res = calc.sum.bind({ num1: 10, num2: 2 })();
console.log(res);
