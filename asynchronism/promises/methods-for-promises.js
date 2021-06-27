/**
 *
 * @param {number} min - minimum value in seconds
 * @param {number} max - maximum value in seconds
 * @returns A number
 */
const random = (min = 1, max = 3) => {
	min *= 1000;
	max *= 1000;

	return Math.floor(Math.random() * (max - min) + min);
};

/**
 *
 * @param {string} msg
 * @param {number} time
 * @returns
 */
const awaitMessage = (msg, time) => {
	return new Promise((resolve, reject) => {
		if (typeof msg !== 'string') return reject('Exception!');
		setTimeout(() => {
			return resolve(msg.toUpperCase());
		}, time);
	});
};

const promises = [
	// "First",
	awaitMessage('promise 1', random()),
	awaitMessage('promise 2', random()),
	awaitMessage('promise 3', random()),
	// "End",
];

// Promise.all, Promise.race, Promise.resolve, Promise.reject
Promise.all(promises)
	.then((resolve) => console.log(resolve))
	.catch((error) => console.log(error));

console.log('Isso será exibido antes da promisse\n----------------------');

const baixarPagina = () => {
	const isCache = true;

	if (isCache) {
		return Promise.reject('Página em cache!');
	} else {
		console.log('************');
		return awaitMessage('Baixei a página', 2000);
	}
};

baixarPagina()
	.then((dadosPagina) => {
		console.log(dadosPagina);
	})
	.catch((e) => console.log('Error:', e));
