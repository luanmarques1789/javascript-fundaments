
var now = new Date();
var time = now.getUTCHours();
console.log(`Agora são ${time} hora(s)`);

if (time < 6) {
    console.log("Está de madrugada!");
} else if (time < 12) {
    console.log("Bom dia!");
} else if (time <= 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}