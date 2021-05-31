class Pagamento {
	constructor() {
		this.value;
	}
}

const pagamento = new Pagamento();
pagamento.value = 1000;

const applyDiscount = (pagamento, discount) => {
	pagamento.value -= discount * pagamento.value;
	return pagamento.value;
	/* 
   Esta função possui efeito colateral,
   uma vez que ela está alterando o parâmetro 
   que está recebendo
   (neste caso o objeto pagamento) */
};

//console.log(applyDiscount(pagamento, 0.2));

const applyDiscount2 = (pagamento, discount) => {
	const pagamentoComDesconto = new Pagamento();
	pagamentoComDesconto.value = pagamento.value - discount * pagamento.value;
	return pagamentoComDesconto.value;
};

console.log(applyDiscount2(pagamento, 0.2));
