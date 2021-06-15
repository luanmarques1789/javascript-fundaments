/** This class provides custom errors for WEB developer  */
module.exports = class CustomError extends Error {
	constructor(foo = 'bar', ...params) {
		// Pass remaining arguments (including vendor specific ones) to parent constructor
		super(...params);

		/** Error name */
		this.name = 'CustomError';

		// Custom debugging information
		this.foo = foo;
		this.date = new Date();
	}

	static handleError(err) {
		console.error(err.name); //CustomError
		console.error(err.foo); //baz
		console.error(err.message); //bazMessage
		console.error(err.date); // error date
		console.error(err.stack);
	}

	INCONSISTENT_FIELD(field) {
		this.name = 'INCONSISTENT_FIELD';

		/* return {
			error_code: 1008,
			error_message: `The "${field}" is inconsistent!`,
		}; */
	}
};
