let a = "A";
let b = "B";
let c = "C";

console.log(a, b, c);

[a, b, c] = [1, 2, 3];

console.log(a, b, c);
console.log("-----");

const arr = [false, true, false];
[a, b, c] = arr;
console.log(a, b, c);

const num = [10, 20, 30, 40, 50, 60, 70];
const [firtNum, secondNum, ...rest] = num;
// ... rest, ... spread (dependendo do contexto ele será chamado algum dos dois)
console.log(firtNum, secondNum);

const pessoa = {
  firstName: "Luan",
  lastName: "Marques",
  age: 17,
};
