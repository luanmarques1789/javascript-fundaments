function test() {
	console.log('a:', a);
	console.log('foo():', foo());

	var a = 1; //hosting (a declaração de a vai subir para cima)
	function foo() {
		return 2;
	}
}

test();
