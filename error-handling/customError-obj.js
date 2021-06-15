const CustomError = require('./CustomError');
const error = new CustomError();

const myFunction1 = () => {
	try {
		throw new CustomError('baz', 'bazMessage');
	} catch (e) {
		CustomError.handleError(e);
	}
};

const myFunction2 = () => {
	try {
		throw error.INCONSISTENT_FIELD('name');
	} catch (e) {
		console.error('ERR', e);
		CustomError.handleError(e);
	}
};

myFunction2();
