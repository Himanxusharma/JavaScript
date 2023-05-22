//Console
console.log('Hello World');
console.log(123);
console.log(true);
var greeting = 'Hello';
console.log(greeting);
console.log([1, 2, 3, 4]);
console.log({ a: 1, b: 2 });
console.table({ a: 1, b: 2 });
console.error('This is some error');
// console.clear();
console.warn('This is a warning');
console.time('Hello');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.timeEnd('Hello');






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


// toString()
val=(5).toString();
val=(true).toString();

// String to number
val=Number('5');
val=Number(true);
val=Number(false);
val=Number(null);
console.log(val);
console.log(typeof val);
val=Number('hello');
val=Number([1,2,3]);
console.log(val);


val=parseInt('100.30');
val=parseFloat('100.30');


// Output
console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed(2));

val= new Date();
val= val.toString();
console.log(val);

// Type Coercion
const val1=String(5);
const val2=6;
const sum=Number(val1+val2);
console.log(sum);
console.log(typeof sum);


// Numbers & The Math Object
const num1=100;
const num2=50;
let val3;


// Simple math with numbers
val3=num1+num2;
val3=num1-num2;
val3=num1*num2;
val3=num1/num2;
val3=num1%num2;


// Math Object
val3=Math.PI;
val3=Math.E;
val3=Math.round(2.8);
val3=Math.ceil(2.4);
val3=Math.floor(2.8);
val3=Math.sqrt(64);
val3=Math.abs(-3);
val3=Math.pow(8,2);
val3=Math.min(2,33,4,1,55,6,3,-2);
val3=Math.max(2,33,4,1,55,6,3,-2);
val3=Math.random();
val3=Math.floor(Math.random()*20+1);


console.log(val3);


// String Methods & Concatenation
const firstName1='William';
const lastName1='Johnson';
const age1=36;
const str='Hello there my name is Brad';
const tags='web design,web development,programming';


let val4;

val4=firstName1+lastName1;

// Concatenation    
val4=firstName1+' '+lastName1;

// Append
val4='Brad ';
val4+='Traversy';

val4='Hello, my name is '+firstName1+' and I am '+age1;

// Escaping
val4='That\'s awesome, I can\'t wait';

// Length
val4=firstName1.length;

// concat()
val4=firstName1.concat(' ',lastName1);

// Change case
val4=firstName1.toUpperCase();
val4=firstName1.toLowerCase();

val4=firstName1[2];

// indexOf()
val4=firstName1.indexOf('l');
val4=firstName1.lastIndexOf('l');

// charAt()
val4=firstName1.charAt('2');
// Get last char
val4=firstName1.charAt(firstName1.length-1);

// substring()
val4=firstName1.substring(0,4);

// slice()
val4=firstName1.slice(0,4);
val4=firstName1.slice(-3);

// split()
val4=str.split(' ');
val4=tags.split(',');
// replace()
val4=str.replace('Brad','Jack');

// includes()
val4=str.includes('Hello');

console.log(val4);


// Template Literals
const name3='John';
const age3=30;
const job='Web Developer';
const city='Miami';
let html;

// Without template strings (es5)
html='<ul><li>Name: '+name3+'</li><li>Age: '+age3+'</li><li>Job: '+job+'</li><li>City: '+city+'</li></ul>';

html='<ul>'+
        '<li>Name: '+name3+'</li>'+
        '<li>Age: '+age3+'</li>'+
        '<li>Job: '+job+'</li>'+
        '<li>City: '+city+'</li>'+
    '</ul>';

function hello(){
    return 'hello';
}

// With template strings (es6)
html=`
    <ul>
        <li>Name: ${name3}</li>
        <li>Age: ${age3}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2+2}</li>
        <li>${hello()}</li>
        <li>${age3>30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`;

document.body.innerHTML=html;


// Arrays & Array Methods
// Create some arrays
const numbers1=[43,56,33,23,44,36,5];
const numbers2=new Array(22,45,33,76,54);
const fruit=['Apple','Banana','Orange','Pear'];
const mixed=[22,'Hello',true,undefined,null,{a:1,b:1},new Date()];
let val5;

// Get array length
val5=numbers1.length;
// Check if is array
val5=Array.isArray(numbers1);
// Get single value
val5=numbers1[3];
val5=numbers1[0];
// Insert into array
numbers1[2]=100;
// Find index of value
val5=numbers1.indexOf(36);

// MUTATING ARRAYS
// Add on to end
numbers1.push(250);
// Add on to front
numbers1.unshift(120);
// Take off from end
numbers1.pop();
// Take off from front
numbers1.shift();
// Splice values
numbers1.splice(1,3);
// Reverse
numbers1.reverse();

// Concatenate array
val5=numbers1.concat(numbers2);

// Sorting arrays
val5=fruit.sort();
val5=numbers1.sort();

// Use the "compare function"
val5=numbers1.sort(function(x,y){
    return x-y;
}
);

// Reverse sort
val5=numbers1.sort(function(x,y){
    return y-x;
}
);

// Find
function under50(num){
    return num<50;
}

val5=numbers1.find(under50);

console.log(numbers1);
console.log(val5);


// Object Literals
const person1={
    firstName:'Steve',
    lastName:'Smith',
    age:30,
    email:''}


