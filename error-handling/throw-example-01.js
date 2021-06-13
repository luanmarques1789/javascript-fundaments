try {
	throw true;
} catch (err) {
	console.log(typeof err);
	console.error(err);
}

/** Console's output:
 * string
 * This is error!
 */
