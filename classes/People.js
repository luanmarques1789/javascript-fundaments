class People {
  /**
   *
   * @param {string} firstName
   * @param {string} lastName
   */

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  talk() {
    console.log(`${this.firstName} is talking!`);
  }

  eat() {
    console.log(`${this.firstName} is eating!`);
  }
}

const p1 = new People("Luan", "Marque");
console.log(p1);
p1.talk();
p1.eat();

console.log("--------------");

/**
 *
 * @param {string} name
 * @param {number} age
 */
function People2(name, age) {
  this.name = name;
  this.age = age;
}

// Doesn't work with arrow functions
People2.prototype.talk = function () {
  console.log(`${this.name} is talking about it!`);
};

const p2 = new People2("Luizinho", 40);
console.log(p2);
p2.talk();
