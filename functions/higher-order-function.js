// higher order function

const soma = (a, b) => a + b;
const mult = (a, b) => a * b;

const calc = (func, a, b) => func(a, b);

/**
 *
 * @param {*} str
 * @returns
 */
const returnFunc = (str = '+') => {
	// if (str === '+') return soma;
	// if (str === '*') return mult;
	const func = {
		'+': soma,
		'*': mult,
	};

	return func[str];
};

/**  mult é a referência para a função func em calc */
const c = calc(mult, 10, 5);
console.log(c);

const d = calc(returnFunc('*'), 10, 5);
console.log(d);
