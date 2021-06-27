const pairNumber = (num) => {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve("Sucess");
    } else {
      reject("Failed");
    }
  });
};

pairNumber(3)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
