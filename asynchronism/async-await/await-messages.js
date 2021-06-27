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
			resolve(msg);
		}, time);
	});
};

const execute = async () => {
	try {
		const fase1 = await awaitMessage('Fase 1', random());
		console.log(fase1);

		const fase2 = await awaitMessage('oi', random());
		console.log(fase2);
		console.log('LOG');

		const fase3 = await awaitMessage('Fase 3', random());
		console.log(fase3);
	} catch (e) {
		console.log(e);
	}
};

execute();

console.log('\n----------------------');
