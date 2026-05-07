function Person(name, age) {

    this.name = name;
    this.age = age;
}

// Adding fn using prototype
Person.prototype.introduce = function () {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
};
// Creating objs
const p1 = new Person("Arun", 22);
const p2 = new Person("Genghis Khan", 812);

p1.introduce();
p2.introduce();