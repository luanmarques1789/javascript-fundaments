

/**
 * OBJETIVO: Testar a estrutura de repetição 
 */

function countNumbers() {
    // Se faz necessário o uso do objeto Number, bem como o atributo value
    let inVal = Number(document.querySelector('input#inVal').value);
    let finVal = Number(document.querySelector('input#finVal').value);
    let incr = Number(document.querySelector('input#incr').value);
    let res = document.querySelector('div#res');

    console.log("inVal =", inVal);
    console.log("finVal =", finVal);
    console.log("incr =", incr);    

    if (inVal == 0 || finVal == 0 || incr == 0) {
        alert("There are empty boxes. Please, fill them.");

    } else {
        res.innerHTML = "Counting...";
        for (let i = inVal; i < finVal; i += incr) {
            res.innerHTML += ` ${i} \u{1F449}`;
            console.log(i);
        }

        res.innerHTML += `\u{1F3C1}`;
    }

}