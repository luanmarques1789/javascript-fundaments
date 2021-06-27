const fs = require('fs');

console.log('Start');
/* console.log('readdirSync:', fs.readdirSync('./')); */

fs.readdir('./', function (err, files) {
	if (err) throw new Error('Erro:', err);

	console.log(files);
});

console.log('End!');

// Optar sempre pelo método assíncrono
