const obj = {
	key1: 1,
	key2: 'text1',
	key3: 1,
	key4: 3,
	key5: 'text2',
	key6: 0,
	key7: 5,
};

console.log('An JavaScript object...\n', obj);
console.log('\nAn JSON data object...\n', JSON.stringify(obj, null, 2));

const replacer = (key, value) => {
	if (typeof value === 'number') {
		if (value > 1) return value;
		return undefined;
	}
	return value;
};

console.log('\nAn JSON data object...\n', JSON.stringify(obj, null, 2));
console.log(JSON.stringify(obj, replacer, 2));
