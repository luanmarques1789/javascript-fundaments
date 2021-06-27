const cep = require('cep-promise');

const fetchCEP = async (postalCode) => {
	return await async function (obj) {
		obj = await cep(postalCode);
		return function () {
			console.log(obj);
		};
	};
};

let obj = '';

fetchCEP(87710420)(obj)();
