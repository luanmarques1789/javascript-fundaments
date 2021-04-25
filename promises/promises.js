/**
 *
 * @param {number} min - minimum value in seconds
 * @param {number} max - maximum value in seconds
 * @returns A number
 */
const random = (min, max) => {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
};

/**
 *
 * @param {string} msg
 * @param {number} time
 * @returns
 */
const awaitMessage = (msg, time) => {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("Exception!");
    setTimeout(() => {
      resolve(msg);
    }, time);
  });
};

awaitMessage("Conexão com o BD.", random(1, 3))
  .then((response) => {
    console.log(response);
    return awaitMessage("Buscando dados na base.", random(1, 2));
  })
  .then((response) => {
    console.log(response);
    return awaitMessage(
      "Retornando os valores para o front-end.",
      random(1, 3)
    );
  })
  .then((response) => {
    console.log(response);
    console.log("FIM!");
  })
  .catch((exception) => {
    console.log("ERROR:", exception);
  });

console.log("Isso será exibido antes da promisse\n----------------------");
