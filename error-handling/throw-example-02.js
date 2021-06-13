try {
	throw 'This is error!';
} catch (err) {
	console.log(typeof err);
	console.error(err);
}

/** Console's output:
 * boolean
 * true
 */
