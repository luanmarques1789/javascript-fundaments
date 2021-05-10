var a = 1;

function someFunction(number) {
	function otherFunction(input) {
		return a;
	}

	a = 5;

	return otherFunction;
}

var firstResult = someFunction(9); // A minha função retorna uma outra função
var result = firstResult(2); //

console.log(firstResult);
console.log(result);
console.log('Other way:', someFunction(1)(2));
