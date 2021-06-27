const axios = require('axios');

async function getUsers() {
	return axios.get('https://jsonplaceholder.typicode.com/users');
}

async function getUsersPosts(userID) {
	return axios.get(
		`https://jsonplaceholder.typicode.com/users/${userID}/posts`
	);
}

(async function () {
	const { data } = await getUsers();
	const posts = [];

	console.log(data);

	for (let i = 0; i < users.length; i++) {
		posts.push(await getUsersPosts(users[i].id));
	}

	//console.log(posts);
})();
