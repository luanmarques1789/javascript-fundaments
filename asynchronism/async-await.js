const fs = require('fs');

const readdir = (path) => {
	return new Promise((resolve, reject) => {
		fs.readdir(path, function (err, files) {
			if (err) {
				reject(err);
			} else {
				resolve(files);
			}
		});
	});
};

const msg = async () => {
	try {
		const list = await readdir('../');
		console.log(list);
	} catch (err) {
		console.log(err);
	}
};

msg();
