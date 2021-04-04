function paridade(num) {
  if (num % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}

let res = paridade(12);
console.log(res);

function soma(n1 = 0, n2 = 0) {
  return n1 + n2;
}

console.log(soma(null, 5));

let k = function (n1, n2) {
  return n1 * n2;
};

console.log(k(5, 5));

/**
 * num! = num * (num - 1)!
 * @param {*} num
 * @returns
 */
function fat(num = 1) {
  if (num == 1) {
    return num;
  }
  return num * fat(num - 1);
}

let fatorial = 20;
console.log(`${fatorial}! = ${fat(fatorial)}`);
