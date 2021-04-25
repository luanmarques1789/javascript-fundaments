const pairNumber = (num) => {
  if (num % 2 === 0) {
    sucessCallback();
  } else {
    errorCallback();
  }
};

const sucessCallback = () => {
  console.log("Yeah! This number is pair.");
};

const errorCallback = () => {
  console.log("Oops! This number isn't pair.");
};
