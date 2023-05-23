// DOM Selection
// SINGLE ELEMENT SELECTORS

// document.getElementById()

// console.log(document.getElementById('container'));
// let doc;
// doc = document;
// doc = document.all;
// doc = document.all[0];
// doc = document.all[1];

// doc = document.all.length;
// doc = document.head;
// doc = document.body;
// doc = document.doctype;
// doc = document.domain;
// doc = document.URL;
// doc = document.characterSet;
// doc = document.contentType;

// doc = document.forms;
// doc = document.forms[0];
// doc = document.forms[0].id;
// doc = document.forms[0].method;
// doc = document.forms[0].action;

// doc = document.links;
// doc = document.links[0];
// doc = document.links[0].id;
// doc = document.links[0].className;
// doc = document.links[0].classList;
// doc = document.links[0].classList[0];

// doc = document.images;   

// doc = document.scripts;  
// doc = document.scripts[2].getAttribute('src');

// let scripts = document.scripts; // HTML collection
// let scriptsArr = Array.from(scripts);   // convert to array

// scriptsArr.forEach(function(script,index) {
//     console.log(index,script.getAttribute('src'));  
// });

// console.log(doc);




// Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#ffff'; 
// taskTitle.style.padding = '5px';
// // document.getElementById('task-title').style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';
 
// document.querySelector()

// # for id
// . for class
// tagname for tag

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.collection-item'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red'; // only the first one
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc'; // only the first one
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4'; // only the first one


// const ul = document.querySelector('ul.collection');
// let item = ul.firstChild
// item = ul.firstElementChild;
// item.textContent = 'Hello';
// item = ul.lastChild // text node
// item = ul.lastElementChild; // element node
// item = ul.childElementCount; // count of child elements
// item = ul.children; // HTML collection
// item = ul.children[0];  // first child
// item = ul.children[1].textContent = 'Hello 2';  // change the text content
// item = ul.children[2].children[0].id = 'test-link'; // change the id    
// item = ul.children[2].children[0];  
// item = ul.children[2].children[0].classList;        
// item = ul.children[2].children[0].classList[0]; 
// item = ul.children[2].children[0].classList.add('test');    
// item = ul.children[2].children[0].classList.remove('test');
// item = ul.children[2].children[0].getAttribute('href');     
// item = ul.children[2].children[0].setAttribute('href','http://google.com');
// item = ul.children[2].children[0].hasAttribute('href');
// item = ul.children[2].children[0].removeAttribute('href');
// item = ul.children[2].children[0];  


// item = li.parentElement; // parent element
// item = li.parentElement.parentElement; // parent of parent element
// item = li.nextSibling; // next sibling
// item = li.nextElementSibling; // next element sibling
// item = li.nextElementSibling.nextElementSibling; // next element sibling
// item = li.previousSibling; // previous sibling
// item = li.previousElementSibling; // previous element sibling
// item = li.previousElementSibling.previousElementSibling; // previous element sibling

// console.log(item);  


// // MULTIPLE ELEMENT SELECTORS

// // document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// // document.getElementsByTagName

// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// // Convert HTML Collection into array
// lis = Array.from(lis);
// lis.reverse();
// lis.forEach(function(li,index) {
//     console.log(li.className);
//     li.textContent = `${index}: Hello`;
// });

// console.log(lis);

// // document.querySelectorAll

// const items = document.querySelectorAll('ul.collection li.collection-item');


// const li  = document.createElement('li');

// // Add class
// li.className = 'collection-item';

// // Add id
// li.id = 'new-item';

// // Add attribute
// li.setAttribute('title','New Item');

// // Create text node and append
// li.appendChild(document.createTextNode('Hello World'));

// // Create new link element
// const link = document.createElement('a');

// // Add classes
// link.className = 'delete-item secondary-content';

// // Add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';

// // Append link into li
// li.appendChild(link);

// // Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);


// // console.log(li);

// // REPLACE ELEMENT

// // Create Element
// const newHeading = document.createElement('h2');
// // Add id
// newHeading.id = 'task-title';
// // New text node
// newHeading.appendChild(document.createTextNode('Task List'));

// // Get the old heading
// const oldHeading = document.getElementById('task-title');
// // Parent
// const cardAction = document.querySelector('.card-action');

// // Replace
// cardAction.replaceChild(newHeading,oldHeading);

// // REMOVE ELEMENT
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // Remove list item
// lis[0].remove();

// // Remove child element
// list.removeChild(lis[3]);

// // CLASSES & ATTR
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// // Replace
// const oldheading = document.getElementById('task-title');
// const newheading = document.createElement('h2');
// newheading.id = 'task-title';
// newheading.appendChild(document.createTextNode('New title'));
// const header = document.querySelector('.collection-header');
// header.replaceChild(newheading,oldheading);


// let val;

// // Classes
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// // Attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href','http://google.com');
// link.setAttribute('title','Google');
// val = link.hasAttribute('title');
// link.removeAttribute('title');
// val = link;

// console.log(val);


// // EVENTS

//  document.querySelector('#submit-btn').addEventListener('click',function(e) {
//      console.log('Hello World');
//      e.preventDefault();
//      let item
//      item = e.target.id;
//      console.log(item);

//  });

// document.querySelector('.clear-tasks').addEventListener('click',onClick);

// function onClick(e) {
//     // console.log('Clicked');
//     let val;
//     val = e;

//     // Event target element
//     val = e.target;
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.classList;

//     // Event type
//     val = e.type;

//     // Timestamp
//     val = e.timeStamp;

//     // Coords event relative to the window
//     val = e.clientY;
//     val = e.clientX;

//     // Coords event relative to the element
//     val = e.offsetY;
//     val = e.offsetX;

//     console.log(val);
// }

// // MOUSE EVENTS

// const clearBtn = document.querySelector('#submit-btn');
// const card = document.querySelector('#name-list');
// // const heading = document.querySelector('h5');

// // Click
// clearBtn.addEventListener('click',runEvent);
// // Doubleclick
// clearBtn.addEventListener('dblclick',runEvent);
// // Mousedown
// clearBtn.addEventListener('mousedown',runEvent);
// // Mouseup
// clearBtn.addEventListener('mouseup',runEvent);
// // Mouseenter
// card.addEventListener('mouseenter',runEvent);
// // Mouseleave
// card.addEventListener('mouseleave',runEvent);
// // Mouseover
// card.addEventListener('mouseover',runEvent);
// // Mouseout
// card.addEventListener('mouseout',runEvent);
// // Mousemove
// card.addEventListener('mousemove',runEvent);

// // Event Handler 
// function runEvent(e) {

//     e.preventDefault(); // prevent default behaviour
//     console.log(`EVENT TYPE: ${e.type}`);
// }


// // KEYBOARD & INPUT EVENTS   

// const form = document.querySelector('form');
// const taskInput = document.querySelector('form');
// // const heading = document.querySelector('h5');
// // const select = document.querySelector('select');

// // // Clear input
// // taskInput.value = '';

// form.addEventListener('submit',runEvent);

// // Keydown
// taskInput.addEventListener('keydown',runEvent);
// // Keyup
// taskInput.addEventListener('keyup',runEvent);
// // Keypress
// taskInput.addEventListener('keypress',runEvent);
// // Focus
// taskInput.addEventListener('focus',runEvent);
// // Blur
// taskInput.addEventListener('blur',runEvent);
// // Cut
// taskInput.addEventListener('cut',runEvent);
// // Paste
// taskInput.addEventListener('paste',runEvent);
// // Input
// taskInput.addEventListener('input',runEvent);
// // Change
// select.addEventListener('change',runEvent);


// function runEvent(e) {

//     e.preventDefault(); // prevent default behaviour
//     console.log(`EVENT TYPE: ${e.type}  ${e.keycode}`);
// }

// const Email = document.querySelector('#staticEmail2');
// Email.addEventListener('keyup',run);
// Email.addEventListener('keydown',run);
// Email.addEventListener('keypress',run);
// Email.addEventListener('keyup',run);


// function run(e){

//     e.preventDefault();
//     console.log('Event type : ' + e.type +e.keycode)
// }

// const heading = document.getElementById('email');
// const Email = document.getElementById('staticEmail2');
// // Email.addEventListener('focus',run);
// // Email.addEventListener('blur',run);
// // Email.addEventListener('cut',run);
// // Email.addEventListener('copy',run);
// // Email.addEventListener('paste',run);
// Email.addEventListener('input',run);


// function run(e){

//     e.preventDefault();
//     console.log('Event type : ' + e.type)
//     heading.innerText = e.target.value;
// }


// EVENT BUBBLING & DELEGATION

//STOP PROPAGATION - The stopPropagation() method prevents propagation of the same event from being called.
// EVENT BUBBLING   - The bubbling principle is simple. When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

// document.querySelector('.card-title').addEventListener('click',function() {
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click',function() {
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click',function() {
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click',function() {
//     console.log('col');
// });

// EVENT DELEGATION - Event delegation is a technique involving adding event listeners to a parent element instead of adding them to the descendant elements. The listener will fire whenever the event is triggered on the descendant elements due to event bubbling up the DOM. The benefits of this technique are:


// document.body.addEventListener('click',addFavorite);

// function addFavorite(e) {

//     console.log(e.target);
//     if(e.target.parentElement.classList.contains('add-favorite')) {
//         console.log('add favorite');
//         if(e.target.parentElement.parentElement.style['background-color'] == 'yellow') {
//             e.target.parentElement.parentElement.style['background-color'] = 'white';
//         }
//         else {
//             e.target.parentElement.parentElement.style['background-color'] = 'yellow';
//         }
//         // e.target.parentElement.parentElement.remove();
//     }

//     else{

//         console.log('not found add favorite');
//         if(e.target.parentElement.parentElement.style['background-color'] == 'yellow') {
//             e.target.parentElement.parentElement.style['background-color'] = 'white';
//         }
//         else {
//             e.target.parentElement.parentElement.style['background-color'] = 'yellow';
//         }
//     }
// }




// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click',deleteItem);

// document.body.addEventListener('click',deleteItem);

// function deleteItem(e) {
//     // if(e.target.parentElement.className === 'delete-item secondary-content') {
//     //     console.log('delete item');
//     // }

//     if(e.target.parentElement.classList.contains('delete-item')) {
//         console.log('delete item');
//         e.target.parentElement.parentElement.remove();
//     }
// }


// // LOCAL & SESSION STORAGE

// // set local storage item
// localStorage.setItem('name','LocalJOhn');
// localStorage.setItem('email','localStorage@femail.com');
// localStorage.setItem('age','18');

// // set session storage item
// sessionStorage.setItem('name','SessionJOhn');

// const age = localStorage.getItem('age');
// console.log(age);
// const name = localStorage.getItem('name');
// console.log(name);
// const name1 = sessionStorage.getItem('name');
// console.log(name1);


// // remove from storage
// localStorage.removeItem('name');

// // clear local storage
// localStorage.clear();

//JSON.parse() - The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string.

//JSON.stringify() - The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.


// document.querySelector('form').addEventListener('submit',function(e) {

//     e.preventDefault();
//     const email = document.getElementById('staticEmail2').value;
    
//     let emails;
//     if(localStorage.getItem('emails') === null) {
//         emails = []
//     }
//     else {
//         emails = JSON.parse(localStorage.getItem('emails'))
//     }
//     emails.push(email);
//     localStorage.setItem('emails',JSON.stringify(emails));
//     alert('Email saved');
// });

// // document.querySelector()

// const tasks = JSON.parse(localStorage.getItem('emails'));

// tasks.forEach(function(task) {
//     console.log(task);
// });

// console.log(tasks);










  