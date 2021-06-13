try {
	throw ['aaa', 'bbb', 4, false];
} catch (err) {
	console.log(typeof err);
	console.error(err);
}

/** Console's output:
 * objetct
 * [ 'aaa', 'bbb', 4, false ]
 */
