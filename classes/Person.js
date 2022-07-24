export default class Person {
	/**
	 * @param {string} name
	 */
	constructor(name) {
		this._name = name ? this._capitalize(name) : null;
	}

	/**
	 * @param {string} name
	 */
	set name(name) {
		this._name = this._capitalize(name);
	}

	get name() {
		return this._name;
	}

	_capitalize(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	greetings() {
		console.log(`Hi there! I'm ${this._name}.`);
	}

	walk() {
		console.log(`${this._name} is walking`);
	}
}
