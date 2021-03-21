
function verifyData() {
    var date = new Date();
    const currentYear = date.getFullYear();
    console.log(currentYear);

    var formYear = document.querySelector('input#inYear').value;
    let age = currentYear - formYear;
    console.log(age);

    var sex = document.getElementsByName('sex')[0].checked;
    var res = document.querySelector('div#res');
    var gen = sex ? "man" : "woman";

    let img = document.createElement('img');
    img.setAttribute('class', 'photo'); // The attributes are the identifier following by their name

    console.log(typeof (formYear)); // formYear is a String
    if (formYear == 0 || formYear > currentYear) {
        alert("[ERROR!] The birthyear is invalid! Try again.");
    } else {
        res.style.textAlign = 'center';
        res.style.fontSize = '1.2em';
        res.innerHTML = `<p> You are a ${gen} of ${age} years old! </p>`;

        if (age <= 10) {
            img.setAttribute('src', `img/${gen}/baby.png`);
        } else if (age <= 23) {
            img.setAttribute('src', `img/${gen}/young.png`)
        } else if (age <= 55) {
            img.setAttribute('src', `img/${gen}/adult.png`);
        } else if (age <= 106) {
            img.setAttribute('src', `img/${gen}/old.png`);
        }
    }

    res.appendChild(img);
}