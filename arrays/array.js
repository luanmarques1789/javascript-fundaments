let arr = [5, 6, 9, 4];
let aux = [10, 5, 6, 3];

console.log(`Array: ${arr}\nArray's length: ${arr.length}`);

console.log(`\nNew length: ${arr.length}`);
arr.sort();
console.log(arr);
console.log(typeof arr);

for (const value of arr) {
  console.log(value);
}

let value = 10;
console.log(`Index of ${value}: ${arr.indexOf(value)}`);
