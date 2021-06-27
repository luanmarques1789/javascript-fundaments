const axios = require('axios');

// It's redundant using `await` more twice in both functions...
async function getUsers() {
	return axios.get('https://jsonplaceholder.typicode.com/users');
}

(async function () {
	// Then, it's so necessary using `await` in callback function, as this...
	const { data } = await getUsers();
	console.log(data);
})();
