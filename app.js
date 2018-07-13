
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


    // PRIMITIVE and Reference(objects)
   /* const name = "prajwal"
    const num = 45
    const isOk = true;
    const dog = null;
    let lastName;
    const obj = {
        a: 1,
        b: 4
    }
    const symbol =  Symbol()
    const today = new Date()
    console.log(today)
    const arr = [name, num, isOk, dog, lastName, obj,today,symbol]
    for (var i = 0; i < arr.length; i++) {
        console.log(typeof arr[i]);
    }
  */

// TYPE CONVERSION

// to strings conversion
// console.clear()
    /*let val;
    val = String(5);
    val = String(new Date())
    val = String([1,'da',3])
    val = String(null)
    val = String(false)
    val = String()

    // toString method

    val = (5).toString();
    val = (true).toString();

    console.log(val)
    console.log(typeof val)
    console.log(val.length)
    */

    /*
    // to number conversion 

    let val;
    val = Number(null);
    val = Number(false);
    val = Number({a:1});
    val = Number('prajwal')
    val = Number('45')

    val = parseInt((100.67))
    val = parseFloat(100.67)


    console.log(val)
    console.log(typeof val)
    console.log(val.toFixed(3))

    // type cohersion (JS handles it itself)

    val1 = 'praj'
    val2 = 6
    add = val1 + val2;
    console.log(add)
    /*

    */

// MATH Ops
    /*
    const num1 = 53;
    const num2 = 42;

    let val;
    val = Math.PI
    val = Math.E
    val = Math.pow(5,3)
    val = Math.round(4.4)
    val = Math.ceil(4.2)
    val = Math.floor(4.9)
    val = Math.sqrt(4)
    val = Math.round((Math.random()*30 +1))
    console.log(val);
    

    // escaping
    let val = ' thats\'s a good book '
    val = 'it\'s a nice character'
    console.log(val)

*/

// Template literals 

    /*const name = "Prajwal"
    const age = 20
    const city = "Bangalore"

    function hello(){return "Hello world"}

    // Templates(like templates) start with `` and spots are filled with ${} with conditionls and functions also(ES6)
    let val = `
    <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>City: ${city}</li>
    <li>${hello()}</li>
    <li>${(age > 18) ? true : false}</li>
    </ul>
    `
    document.body.innerHTML = val
    console.log(val)
    */

// Arrays
        /*const numbers = new Array(2,5,1,6,7,10);
        numbers.shift()
        numbers.unshift(4)
        numbers.pop()
        numbers.push(5,4)

        // ascending sort
        numbers.sort((x,y)=> x-y)

        // descending sort
        numbers.sort((x,y)=> y-x)

        function isUpper(x){
            return x>5
        }
        // find
        numbers.find(isUpper)

        console.log(numbers);*/


 // Object literals

       /* const person = {
            firstName: "Prajwal",
            lastName : "M",
            age: 20,
            address: {
                city : "Bengaluru",
                state: "KA"
            },
            hobbies: ["books","television"],
            getBirthYear: function(){
            return 2018 - this.age;
            }
        }

        val = person;
        val = person["firstName"]
        val = person.age
        val = person.address.city
        val = person.hobbies[1]
        val = person.getBirthYear()
        console.log(val);*/

// DATE

   /* let today = new Date();
    let val = today.getDay();
    val = today.getMonth();
    val = today.getFullYear();
    val = today.getSeconds();
    val = today.getHours();
    val = today.getMinutes();

    today.setFullYear(2008)
    // month/date/year hh:mm:ss format
    today = new Date('12/22/1997 12:12:12')
    today = new Date('December 22 1997 12:12:12')
    today = new Date('12-22-1997 12:12:12')
    today = new Date('Dec 22 1997 12:12:12')

    console.log(today)*/

// Conditionals 

    /*let val = 100;

    // check after type conversion
    if(val == '100'){
        console.log(true);
    }else{
        console.log(false);
    }

    // check wihout type conversion
    if(val === '100'){
        console.log(true);
    }else{
        console.log(false);
    }*/

    // checking for null cases as in java but ==null may also suffice
    /*
    let val1;
    if(typeof val1 ===  'undefined'){
        console.log(true); 
    }else{
        console.log(false);
    }


    // ternary
    let val =100;
    console.log((val == 100)?'Correct':'Incorrect');

    */

// Functions and expressions
function compare( x ,  y){
   return (x>y?x:y);
}
console.log(compare(4,7));

// expressions
let compare2 = function(x,y){
   return (x>y?x:y);
};
console.log(compare2(4,8));

// immediatly invocable functions
(function(firstName,lastName){
    console.log(`${firstName} ${lastName}`);
})("Prajwal","M");

// validations in functions by setting defaults
(function(firstName = "Prajwal",lastName="M"){
    console.log(`${firstName} ${lastName}`);
})("Sophie","Dog");

// when function is inside a object it is called a method

const computer = {
    size: function(x,y,z){
        return x*y*z;
    }
};
computer.speed = function(x){
    return x;
}
console.log(computer.size(2,3,4));
console.log(computer.speed(4));