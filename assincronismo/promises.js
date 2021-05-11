function time(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms);
	});
}

time(2000).then(() => console.log('fim!'));
