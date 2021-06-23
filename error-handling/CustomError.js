/** This class provides custom errors for WEB developer  */
class CustomError extends Error {
	constructor() {
		//Pass remaining arguments (including vendor specific ones) to parent constructor
		super();

		// Custom debugging information
		this.date = new Date().toUTCString();
	}

	handleError(err) {
		console.error('---------------------------------------------------------');
		console.error('ERR_NAME:', err.name);
		console.error('ERR_MESSAGE:', err.message);
		if (err.content) {
			console.error('ERR_CONTENT:', err.content);
		}
		console.error('ERR_NOW_DATE:', err.date);
		console.error('ERR_STACK:', err.stack);
		console.error('---------------------------------------------------------');
	}

	/**
	 *
	 * @param {String} msg - Mensagem personalizável
	 * @returns Retorna um array com as chaves, e os seus respectivos valores, do erro
	 */
	customError(content, ...params) {
		return {
			name: params.nome ? params.nome : this.name,
			message: params.msg ? params.msg : `Mensagem padrão`,
			content: content,
			date: this.date,
			stack: this.stack,
		};
	}
}

module.exports = CustomError;
