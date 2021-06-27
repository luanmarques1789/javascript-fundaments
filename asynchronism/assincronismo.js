const fs = require('fs');

console.log('First');
const path = 'assincronismo/async-await.js';

const readFile = (path) => {
	return new Promise((resolve, reject) => {
		fs.readFile(path, (err, data) => {
			if (!err) {
				resolve(data.toString());
			} else {
				reject(err);
			}
		});
	});
};

const run = async () => {
	try {
		const res = await readFile(path);
		console.log(res);
		throw 'thrown message';
	} catch (err) {
		console.error(err);
	}
};
run();
console.log('End');
