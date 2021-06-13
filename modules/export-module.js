const soma = (a, b) => a + b;
const mult = (a, b) => a * b;

const calc = (func, a, b) => func(a, b);

module.exports = {
	soma,
	mult,
	calc,
};
