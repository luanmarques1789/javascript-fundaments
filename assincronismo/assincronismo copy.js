const fs = require('fs');

console.log('First');
const path01 = './functions/higher-order-function.js';
const path02 = 'C:/Users/DONIZETE/documents/lorem-ipsum.txt';
const path03 = 'C:/Users/DONIZETE/Documents/My Games/Scooby/Save_Profile1.bin';

fs.readFile(path03, (err, data) => {
	if (!err) {
		console.log(data.toString());
	}
});

// const readFile = (path) => {
// 	return new Promise((resolve, reject) => {
// 		fs.readFile(path, (err, data) => {
// 			if (!err) {
// 				resolve(data.toString());
// 			} else {
// 				reject(err);
// 			}
// 		});
// 	});
// };

// const run = async () => {
// 	try {
// 		const res = await readFile(path);
// 		console.log(res);
// 		throw 'thrown message';
// 	} catch (err) {
// 		console.error(err);
// 	}
// };
// run();
console.log('End');
