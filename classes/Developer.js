import Person from './Person.js';

export default class Developer extends Person {
	constructor(name, codeLanguage) {
		super(name);
		this._codeLanguage = codeLanguage;
	}

	code() {
		return `${this._name} is coding on ${this._codeLanguage}...`;
	}
}
