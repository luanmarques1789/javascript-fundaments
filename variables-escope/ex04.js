var a = 1;
function b() {
	console.log('Escopo da função:', a);
	a = 10;
	return; // retorna void, isto é, vazio...
	function a() {} // hosting
}
b();

console.log(a); // Output: 1

/** Explicação:
 *
 * No interior da função b(),
 * a function a() faz hosting,
 * ou seja,
 * ela sobe para o escopo de b().
 *
 * Logo quando a recebe 10, nesse momento
 * ele é uma função.
 */
