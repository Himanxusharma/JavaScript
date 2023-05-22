var name="John";
console.log(name);
name="Steve Smith";
console.log(name);

var greeting;
console.log(greeting);
greeting="Hello";
console.log(greeting);

// letters, numbers, _, $
// Can not start with number
var $name="John";
console.log($name);

// Multi word vars
var firstName="John"; // Camel case
var first_name="Sara"; // Underscore
var FirstName="Tom"; // Pascal case
var firstname;


let name1="John";
console.log(name1);
name1="Steve Smith";
console.log(name1);

const name2="John";
console.log(name2);
// name2="Steve Smith";
// console.log(name2);

const person={ name:"John", age:30 };

person.name="Sara";
person.age=32;

console.log(person);

const numbers=[1,2,3,4,5];
numbers.push(6);
console.log(numbers);

// PRIMITIVE
// String
// Number
// Boolean
// null
// undefined
// Symbols(ES6)

// REFERENCE TYPES - Objects
// Array
// Object Literals
// Functions
// Dates
// Anything Else


// PRIMITIVE
let item;
console.log('type',typeof item);
// String
item="Hello World";
console.log('type',typeof item);
// Number
item=100;
console.log('type',typeof item);
// Boolean
item=true;
console.log('type',typeof item);
// null
item=null;
console.log('type',typeof item);
// undefined
item=undefined;
console.log('type',typeof item);
// Symbols(ES6)
item=Symbol();
console.log('type',typeof item);


// REFERENCE TYPES 
// Array
item=[1,2,3,4];
console.log('type',typeof item);
// Object Literals
item={ a:1, b:2 };
console.log('type',typeof item);
// Functions
item=function(){
    console.log('Hello');
}
console.log('type',typeof item);
// Dates
item=new Date();
console.log('type',typeof item);
// Anything Else
item=new Date();
console.log('type',typeof item);

// Type Conversion
let val;
// Number to string
val=String(555);
val=String(4+4);
// Bool to string
val=String(true);
// Date to string
val=String(new Date());
// Array to string
val=String([1,2,3,4]);
