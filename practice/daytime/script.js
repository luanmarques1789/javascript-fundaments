/**
 * This method loads a photo accordind to the daytime
 */
function loadPhoto() {
    // Declaring the variable msg and img
    var msg = document.querySelector("div#msg");
    var img = document.querySelector("img#img");

    // Getting daytime by client's computer
    var current = new Date();
    var currentTime = current.getHours();
    console.log(currentTime);

    msg.innerHTML = `It's ${currentTime} hours now!`;
    if (currentTime >= 6 && currentTime < 12) {
        // Good morning
        msg.innerHTML += "<p>Good morning!<p>" // Se faz necessário o parágrafo para começar em uma nova linha
        img.src = "img/manha.jpg";
        document.body.style.backgroundColor = "#ffd580";

    } else if (currentTime >= 12 && currentTime < 18) {
        // Good afternoon
        msg.innerHTML += "<p>Good afternoon!<p>";
        img.src = "img/tarde.jpg";
        document.body.style.backgroundColor = "#b9846f";

    } else if (currentTime <= 23) {
        // Good evening
        msg.innerHTML += "<p>Good evening!<p>";
        img.src = "img/noite.jpg";
        document.body.style.backgroundColor = "#2f393b";
    }

}