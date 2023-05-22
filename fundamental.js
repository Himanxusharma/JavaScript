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

// document.body.innerHTML=html;


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

// Use the "compare function" to sort
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
    email:'hello@femail.com'}




//Date and Time
let val6;

const today=new Date();
let birthday=new Date('9-10-1981 11:25:00');
birthday=new Date('September 10 1981');
birthday=new Date('9/10/1981');

val6=today.getMonth();
val6=today.getDate();
val6=today.getDay();
val6=today.getFullYear();
val6=today.getHours();
val6=today.getMinutes();
val6=today.getSeconds();
val6=today.getMilliseconds();
val6=today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);


// If Statements & Comparison Operators
// if(something){
//     do something
// } else {
//     do something else
// }

const id=100;

// // EQUAL TO
// if(id==100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // NOT EQUAL TO
// if(id!=101){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE
// if(id===100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // NOT EQUAL TO VALUE & TYPE
// if(id!==100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }


// // Test if undefined
// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('NO ID');
// }

// // GREATER OR LESS THAN
// if(id>=100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// IF ELSE
// const color='yellow';

// if(color==='red'){
//     console.log('Color is red');
// } else if(color==='blue'){
//     console.log('Color is blue');
// } else {
//     console.log('Color is not red or blue');
// }

// LOGICAL OPERATORS
const name4='Steve';
const age4=20;

// AND &&
if(age4>0 && age4<12){
    console.log(`${name4} is a child`);
}
else if(age4>=13 && age4<=19){
    console.log(`${name4} is a teenager`);
}
else {
    console.log(`${name4} is an adult`);
}

// OR ||
if(age4<16 || age4>65){
    console.log(`${name4} can not run in race`);
}
else {
    console.log(`${name4} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id===100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if(id===100)

    console.log('CORRECT');
else
    console.log('INCORRECT');


// SWITCHES
const color='yellow';

switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

let day;

switch(new Date().getDay()){
    case 0:
        day='Sunday';
        break;
    case 1:
        day='Monday';
        break;
    case 2:
        day='Tuesday';
        break;
    case 3:
        day='Wednesday';
        break;
    case 4:
        day='Thursday';
        break;
    case 5:
        day='Friday';
        break;
    case 6:
        day='Saturday';
        break;
}

console.log(`Today is ${day}`);

// Function Declarations & Expressions
// FUNCTION DECLARATIONS

function greet(){
    // console.log('Hello');
    return 'Hello';
}

// console.log(greet());

// FUNCTION EXPRESIONS

const square=function(x=3){
    return x*x;
}

// console.log(square());

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//     console.log('IIFE Ran..');
// })();
// (function(name){
//     console.log('Hello '+name);
// })('Brad');

// PROPERTY METHODS

const todo={
    add:function(){
        console.log('Add todo..');
    }
    ,
    edit:function(id){
        console.log(`Edit todo ${id}`);
    }
}


todo.delete=function(){
    console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();


// General Loops
// FOR LOOP

// for(let i=0;i<10;i++){
//     if(i===2){
//         console.log('2 is my favorite number');
//         continue;
//     }

//     if(i===5){
//         console.log('Stop the loop');
//         break;
//     }

//     console.log('Number '+i);
// }

// WHILE LOOP

// let i=0;

// while(i<10){
//     console.log('Number '+i);
//     i++;
// }

// DO WHILE

// let i=0;

// do {
//     console.log('Number '+i);
//     i++;
// }

// while(i<10);

// LOOP THROUGH ARRAY
const cars=['Ford','Chevy','Honda','Toyota'];

// for(let i=0;i<cars.length;i++){
//     console.log(cars[i]);
// }

// FOREACH
// cars.forEach(function(car,index,array){
//     console.log(`${index} : ${car}`);
//     console.log(array);
// });

// MAP
// const users=[
//     {id:1,name:'John'},
//     {id:2,name:'Sara'},
//     {id:3,name:'Karen'},
//     {id:4,name:'Steve'}
// ];

// const ids=users.map(function(user){
//     return user.id;
// });

// console.log(ids);

// FOR IN LOOP
const user={
    firstName:'John',
    lastName:'Doe',
    age:40
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}


// A look at the window object
// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
// alert('Hello World');

// Prompt
// const input=prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure')){
//     console.log('YES');
// } else {
//     console.log('NO');
// }

let val7;

// Outer height and width
val7=window.outerHeight;
val7=window.outerWidth;

// Inner height and width
val7=window.innerHeight;
val7=window.innerWidth;

// Scroll points
val7=window.scrollY;
val7=window.scrollX;

// Location Object
val7=window.location;
val7=window.location.hostname;
val7=window.location.port;
val7=window.location.href;
val7=window.location.search;

// Redirect
// window.location.href='http://google.com';
// Reload
// window.location.reload();

// History Object
// window.history.go(-2);
// val7=window.history.length;

// Navigator Object
val7=window.navigator;
val7=window.navigator.appName;
val7=window.navigator.appVersion;
val7=window.navigator.userAgent;
val7=window.navigator.platform;
val7=window.navigator.vendor;
val7=window.navigator.language;

console.log(val7);


// Block Scope With let & const
// Global Scope
var a=1;
let b=2;
const c=3;

// function test(){
//     var a=4;
//     let b=5;
//     const c=6;
//     console.log('Function Scope: ',a,b,c);
// }

// test();

// if(true){
//     // Block Scope
//     var a=4;
//     let b=5;
//     const c=6;
//     console.log('If Scope: ',a,b,c);
// }

for(let a=0;a<10;a++){
    console.log(`Loop: ${a}`);
}

console.log('Global Scope: ',a,b,c);
