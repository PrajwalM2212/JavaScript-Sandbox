// Java Script constructor

// JS ways to create single objects
// JS object literal

const person = {
    name: "Prajwal",
    age: 20,
    getDOB: function () {
        return 2017 - this.age;
    }
}

// JS object using the new keyword

const newPerson = new Object();
newPerson.name = "Prajwal";
newPerson.age = 20;
newPerson.getDOB = new Function("return 2017 - this.age");

// But if we need more instances of the same object we use constructors

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName
    this.age = age;
    this.getDOB = function () {
        return 1997 - this.age;
    }
}

const personFromConstructor = new Person("Prajwal", "M", 20);


// Built in constructors
// Only advantage is that we can set custom properties

const num = new Number(5);
const string = new String("Hello");
string.size = 12;
const arr = new Array(2, 3, 4);

// It is a good practice to put methods into prototypes of the object

// a general method 
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

// We can create methods to alter data as well
Person.prototype.getsMarried = function (lastName) {
    this.lastName = lastName;
}

personFromConstructor.getsMarried("Haa");



//Inheritence using prototypes. All custom defined objects inherit from base Object. 

//lets create a hero constructor for our game
function Hero(name, health) {
    this.name = name;
    this.health = health;
    this.showHealth = new Function("return this.health");
}

Hero.prototype.introduce = function () {
    return `Hi, I am ${this.name} and have ${this.health} health points`;
}

// Now our warrior constructor has some properties common to hero so we use Hero.call() method

function Warrior(name, health, anger) {
    Hero.call(this, name, health);
    this.anger = anger;
}

Warrior.prototype.showAnger = function () {
    return `My anger is ${this.anger}`;
}

// we can call Hero methods if it were not prototype as we use Hero.call()
new Warrior("Prajwal", 100, 50).showHealth();

//Now our healer constructor has some properties common to hero so we use Hero.call() method

function Healer(name, health, calm) {
    Hero.call(this, name, health);
    this.calm = calm;
}
new Healer("Prajwal", 100, 50);


// Now we can set the prototype methods of Hero to both Warrior and Healer using Object.create() method
// This inherits the methods of Hero as well as seen in the __proto__ property

Healer.prototype = Object.create(Hero.prototype);
Warrior.prototype = Object.create(Hero.prototype);

// the constructor is missing 

Healer.prototype.constructor = Healer;
Warrior.prototype.constructor = Warrior;

// we can also override the parent methods 
Healer.prototype.introduce = function () {
    return `Hi, I am ${this.name} and have ${this.calm} calm points`;
}

new Healer("Prajwal", 100, 50).introduce();


// Object.create()
// This gives another way of creating objects 

// We can define all functions in a object
const customerPrototype = {
    greeting: function () {
        return `Welcome ${this.name}`;
    },

    showMembership: function () {
        return `You have a ${this.membership} memebership`;
    }
}

// Then create the object 
const customer = Object.create(customerPrototype);
customer.name = "Prajwal";
customer.membership = "Premium";

// Alternatively define all properties in the object.create() itself by creating a properties object;
const customer1 = Object.create(customerPrototype, {
    name: { value: "Prajwal" },
    membership: { value: "Premimum" }
}
)
console.log(customer1);