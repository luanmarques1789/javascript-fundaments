class ControleRemoto {
	constructor(tv) {
		this._tv = tv;
		this._volume = 0;
	}

	// Métodos de instância | Referente ao objeto
	aumentarVolume() {
		this._volume >= 100 ? (this._volume = 100) : (this._volume += 5);
	}

	diminuirVolume() {
		this._volume <= 0 ? (this._volume = 0) : (this._volume -= 5);
	}

	// Métodos estáticos | os métodos estáticos não possuem acesso aos dados da instância
	static trocarPilha() {
		console.log('Pilha trocada!');
	}
}

const controle1 = new ControleRemoto('LG');
console.log(controle1);

for (let i = 0; i < 25; i++) {
	controle1.aumentarVolume();
}

for (let i = 25; i > 0; i--) {
	controle1.diminuirVolume();
}

console.log(controle1);
ControleRemoto.trocarPilha();
