// The function...
async function getNumber1(n) {
	return await (n * n - 2);
}

// is equivalent to...
function getNumber2(n) {
	return Promise.resolve(n * n - 2);
}

getNumber1(5).then((e) => console.log('getNumber1:', e));
getNumber2(5).then((e) => console.log('getNumber2:', e));
