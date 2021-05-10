var fullname = 'Tulio Faria';
var obj = {
	fullname: 'Jose Silva',
	prop: {
		fullname: 'Nome Sobrenome',
		getFullname: function () {
			return this.fullname;
		},
	},
};

console.log(obj.prop.getFullname()); // Output: Nome Sobrenome

var test = obj.prop.getFullname();
console.log(test); // Output: Nome Sobrenome

// teste é referência da função getFullName
var test2 = obj.prop.getFullname;
console.log('Sem bind()', test2()); // Output: undefined

//Fazendo a correção do test2:
console.log('Com bind()', test2.bind(obj.prop)());

console.log(test2.bind(obj)()); // Output: Jose Silva

/** Pontos:
 * O valor do this não é algo fixo, o
 * que dependerá do contexto em que está aplicado
 * Portanto, this é uma palavre chave mutável.
 *
 * Recomendação:
 * Fazer pouca ou mesmo nenhuma utilizaçaão do this,
 * uma vez que pode gerar side effects para o código.
 */
