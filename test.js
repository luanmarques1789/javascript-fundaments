const fs = require('fs');

const readFile = (file) => {
	return new Promise((resolve, reject) => {
		fs.readFile(file, (err, contents) => {
			if (err) {
				reject(err);
			} else {
				resolve(contents.toString());
			}
		});
	});
};

const writeFile = (file, contents) => {
	return new Promise((resolve, reject) => {
		fs.writeFile(file, contents, (err) => {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
};

const out = (contents) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log(contents);
			resolve();
		}, 2000);
	});
};

readFile('assincronismo/promises-chaining.js').then(
	writeFile.bind(null, 'test.js')
);

readFile('assincronismo/promises.js')
	.then(out)
	.then(() => console.log('END!'));
