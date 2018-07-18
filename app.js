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
console.log(newPerson.getDOB());

// But if we need more instances of the same object we use constructors

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName
    this.age = age;
    this.getDOB = function () {
        return 1997 - this.age;
    }
}

const personFromConstructor = new Person("Prajwal","M",20);


// Built in constructors
// Only advantage is that we can set custom properties

const num = new Number(5);
const string = new String("Hello");
string.size = 12;
const arr = new Array(2, 3, 4);

// It is a good practice to put methods into prototypes of the object

// a general method 
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

// We can create methods to alter data as well
Person.prototype.getsMarried = function(lastName){
    this.lastName = lastName;
}

personFromConstructor.getsMarried("Haa");
console.log(personFromConstructor.toString());