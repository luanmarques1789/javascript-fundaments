var idade = 18;
console.log("Idade entrada:", idade);

if (idade >= 67 || (idade < 18 && idade >= 16)) {
    console.log("Voto opcional");
} else if (idade >= 18) {
    console.log("Voto obrigatório");
} else {
    console.log("Não vota");
}

var dataType = typeof (idade);
console.log(dataType.toUpperCase()); // Ou: console.log((typeof(idade)).toUpperCase()); 