const counter = function (num) {
	const that = this;
	let current = 1;
	let timer = setInterval(() => {
		if (current === num) {
			clearInterval(timer);
		}
		console.log(current++, num);
		console.log(this);
	}, 500);
};

counter(5);
