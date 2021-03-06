var person = {
  firstName: "Luan",
  lastName: "Marques",
  age: 17,
  eyeColor: "brown",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ", 3);
    firstName: parts[0];
    lastName: `${parts[1]} ${parts[2]}`;
  },
};

console.log(`My object: ${person}`);
console.log(`My eyes color is ${person.eyeColor}`);
console.log(person.fullName);

person.fullName = "Carlos Rodrigues Maia";
console.log(`New name: ${person.fullName}`);
