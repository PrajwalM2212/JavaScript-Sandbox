
// Console
/*alert("hello world");
console.log("hello");
console.log(true)
console.table({
    a:1,
    b:2
});
console.error("error");
console.clear();
console.warn('this is a warning');
console.time("Hello");
    console.log("Hello");
    console.log("world");
console.timeEnd("Hello");*/

// var - from brginning
// let , const - from 2015
/*var name = "Prajwal";
console.log(name);
name = "lawjrap";
console.log(name);

var greeting;
console.log(greeting);
greeting = "world"
console.log(greeting);*/
// variable names can include letters,numbers,_ and $ . variable names should not begin with numbers
// multiword use Camel case or under_score


/*
let name = "Prajwal";
console.log(name);
name = "lawjrap";
console.log(name);*/

/*const name = 'prajwal';
console.log(name);
name = 'lawjarp'*/
// we cant reassign const
// we have assign value to const and cannot initialized like var or let

/*
// we can mutant const but not reassign : very important
const person = {
    name: "prajwal"
};
// we can change the attribute inside the const person but not the object person itself
person.name = 'lawjarp'

// we can add and remove elements from the array but we cannot reassign array numbers itself
const numbers = [2,4,5];
numbers.push(6)
console.log(numbers)
*/

// data types 
/*
primitive data type : stored directly in the location where variable is accessed . Stored on stack
reference data type: stored in a heap . accessed by reference by pointer to location in memory

JS has 6 primitive data types: String,Number,Boolean,Null,Undefined(var not assigned),Symbols(ES6)
reference types : arrays,object literals,functions,dates etc

Java script is a dynamically typed languages :
types are associated with values and not variables
same variable can hold different types
we need not specify types as in java or c++
*/

// PRIMITIVE
const name = "prajwal"
const num = 45
const isOk = true;
const dog = null;
let lastName;
const obj = {
    a: 1,
    b: 4
}
const arr = [name, num, isOk, dog, lastName, obj]
for (var i = 0; i < arr.length; i++) {
    console.log(typeof arr[i]);
}


