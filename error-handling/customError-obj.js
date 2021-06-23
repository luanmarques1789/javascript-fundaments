const CustomError = require('./CustomError');
const error = new CustomError();

const myFunction1 = () => {
	try {
		throw error;
	} catch (e) {
		error.handleError(e);
	}
};

const myFunction2 = () => {
	const data = {
		body: { username: 'SquareBeast', password: 'pass1234' },
	};
	try {
		throw error.customError(data, null);
	} catch (e) {
		//console.error('ERR', e);
		error.handleError(e);
	}
};

myFunction2();
