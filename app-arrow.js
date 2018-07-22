
const obj = () => { return { title: "Hello" } }
console.log(obj());

// One-Line dont need braces
const sayHello = () => console.log("Hello")

sayHello();

// One-line functions that dont have braces
// dont need a return key-word

// single parameters dont require paranthesis
const name = last => last + " " + "M"
console.log(name("last"));