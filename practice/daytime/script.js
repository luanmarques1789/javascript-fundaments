/**
 * This method loads a photo accordind to the daytime
 */
function loadPhoto() {
    // Declaring the variable msg and img
    var msg = document.querySelector("div#msg");
    var img = document.querySelector("img#img");

    // Getting daytime by client's computer
    var actual = new Date();
    var actualTime = actual.getHours();
    console.log(actualTime);

    msg.innerHTML = `It's ${actualTime} hours now!`;
    if (actualTime >= 6 && actualTime < 12) {
        // Good morning
        msg.innerHTML += "<p>Good morning!<p>" // Se faz necessário o parágrafo para começar em uma nova linha
        img.src = "img/manha.jpg";
        document.body.style.backgroundColor = "#ffd580";

    } else if (actualTime >= 12 && actualTime < 18) {
        // Good afternoon
        msg.innerHTML += "<p>Good afternoon!<p>";
        img.src = "img/tarde.jpg";
        document.body.style.backgroundColor = "#b9846f";

    } else {
        // Good evening
        msg.innerHTML += "<p>Good evening!<p>";
        img.src = "img/noite.jpg";
        document.body.style.backgroundColor = "#2f393b";
    }

}