try {
	throw {
		type: 'validation-error',
		message: `The field 'name' cannot be null!`,
	};
} catch (err) {
	console.log(typeof err);
	console.error(err);
}

/** Console's output:
 * object
 * { type: 'validation-error', message: "The field 'name' cannot be null!" }
 */
