// My callback function for button event
function handleClick() {
	console.log('Button was clicked');
}

function newButton(content, callback) {
	const $body = document.querySelector('body');

	const $button = document.createElement('button');
	$button.textContent = content;
	console.log('Before callback');
	callback($button);
	console.log('After callback');
	$body.insertAdjacentElement('beforeend', $button);

	return $button;
}

const $login = newButton('Login', ($button) => {
	$button.style.cssText = `
    font-size: 20px;
    color: gray;
    text-transform: uppercase;
    `;
	$button.addEventListener('click', handleClick);
	console.log('All is working!');
});
console.log($login);

const $signup = newButton('Signup', () => {
	console.log('coiso');
});
console.log($signup);
