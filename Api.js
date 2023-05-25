// XMLHttpRequest (XHR) is a JavaScript API to create AJAX requests.
// AJAX is the art of exchanging data with a server, and updating parts of a web page - without reloading the whole page.
// XMLHttpRequest is used heavily in AJAX programming.
// XMLHttpRequest is a browser API that provides client functionality for transferring data between a client and a server.
// It provides an easy way to retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.

// Why Xhr is used? - The XMLHttpRequest object can be used to request data from a web server.

// document.getElementById("check-btn").addEventListener("click", loadData);

// // onload is used to check the status of the request
// function loadData() {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "data.txt", true);
//   xhr.onprogress = function () {
//     console.log("onprogress ", this.readystate);
//   };

//     xhr.onload =function(){
//         console.log('onload readystate', this.readystate);
//         if(this.status === 200){
//             document.getElementById('name-list').innerHTML = `<h1>${this.responseText}</h1>`
//         }
//     }

//     xhr.onerror = function(){
//         console.log('Request error');
//     }

//     xhr.send();
// }

// readyState Values

// 0: request not initialized - Unsent

// 1: server connection established - Opened

// 2: request received  - Headers_received

// 3: processing request    - Loading

// 4: request finished and response is ready    - Done

// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"

// onreadystatechange
// Stores a function (or the name of a function) to be called automatically each time the readyState property changes

// readyState   -   Holds the status of the XMLHttpRequest.

// function loadData() {
//     const xhr = new XMLHttpRequest();

//     xhr.onprogress = function (){
//         console.log('onprogress ',xhr.onprogress);
//     }

//     xhr.open("GET", "data.txt", true);
//       xhr.onreadystatechange = function(){
//         console.log('ready state ', xhr.readyState);
//         if(this.status === 200 && this.readyState === 4){
//             console.log(this.responseText);
//         }
//       }
//       xhr.send();
//   }

// status
// Returns the status-number of a request
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"

// statusText
// Returns the status-text (e.g. "OK" or "Not Found")

// responseText
// Returns the response data as a string

// responseXML
// Returns the response data as XML data

// Methods for Request
// open(method, url, async)
// Specifies the request
// method: the request type GET or POST
// url: the file location
// async: true (asynchronous) or false (synchronous)

// send()
// Sends the request to the server (used for GET)

// Methods for Response
// responseText
// Returns the response data as a string

// responseXML
// Returns the response data as XML data

// Properties for Response
// responseText
// Returns the response data as a string

// responseXML
// Returns the response data as XML data

// status
// Returns the status-number of a request
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"

// statusText
// Returns the status-text (e.g. "OK" or "Not Found")

// // xhr get json data

// document.getElementById("check-btn").addEventListener("click", loadUser);
// function loadUser() {
//   console.log("load user");
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "user.json", true);
//   xhr.onload = function () {
//     if (this.status === 200) {
//       // console.log(this.responseText);
//       const user = JSON.parse(this.responseText);
//       const output = `
//             <ul class="collection">    
//                 <li class="collection-item avatar">
//                 <img src="${user.avatar} " alt="" class="circle">
//                 <span class="title">ID : ${user.id}</span>
//                 <p>${user.first_name} <br>
//                 ${user.last_name}<br>
//                 ${user.email}
//                 </p>
//                 <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
//                 </li>
//             </ul>
//             `;
//       document.getElementById("name-list").innerHTML = output;

//       console.log(user);
//     }
//   };

//   xhr.send();
// }




// // xhr get json array data - Multiple Users

// document.getElementById('check-btn').addEventListener('click',loadUsers);

// function loadUsers(){
//     console.log('load Users')
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET','users.json',true);
    
//     xhr.onload = function(){
//       if(this.status ===200){
//         const users = JSON.parse(this.responseText);
//         let output = '';
//         users.forEach(users => {
//           output += `
//                       <ul class="collection">    
//                           <li class="collection-item avatar">
//                           <img src="${users.avatar} " alt="" class="circle">
//                           <span class="title">ID : ${users.id}</span>
//                           <p>${users.first_name} <br>
//                           ${users.last_name}<br>
//                           ${users.email}
//                           </p>
//                           <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
//                           </li>
//                       </ul>
//                       `;
  
  
//       });
//       document.getElementById('name-list').innerHTML = output;
      
//       }

//     }
  
//   xhr.send();
// }



// // xhr get data from external api
// // jokes 

// document.getElementById('getdata').addEventListener('click',getData);

// function getData(e){

//   e.preventDefault();
//   // console.log('Get Data');
//   const number = document.getElementById('number').value;
//   // console.log(number);
//   let URL = `https://v2.jokeapi.dev/joke/Dark?type=single&amount=${number}`;
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET',URL,true);
//   xhr.onload = function(){
//     if(this.status === 200){
//       const response = JSON.parse(this.responseText);
//       let output =``;
//       console.log(response);
//       response.jokes.forEach(function(item){
//         output += `<li>${item.joke}</li>`;
        
//       });    
//       console.log(output);
//       document.querySelector('.jokes').innerHTML = output;
//     }
//   }

//   xhr.send();
  
// }



// // asynchronous javascript

// // synchronous javascript

const todos  = [

  { title: "First", body:"This is first todo"},
  { title:"Second", body:"This is Second todo"},
  { title:"Third", body:"This is Third todo"}


]

function createTodo(todo, callback){

  setTimeout(function(){
    todos.push(todo)
    callback()
  },2000)
}


function getTodos(){
  let output =``
  setTimeout(()=>{
    todos.forEach(function(todo){
      output += `<li>${todo.body}</li>`;
    })

    document.querySelector('.todos').innerHTML = output
  },1000)
}

createTodo(  { title:"Fourth", body:"This is Fourth todo"},getTodos);

document.getElementById('view').addEventListener('click',getTodos);
document.getElementById('pop').addEventListener('click',removeTodo);

function removeTodo(todo){
  setTimeout(function(){
    todos.pop(todo);
    getTodos();
  },2000)
}


// // callback function - A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// // We  can pass anonymous function as a callback function
// // Aonymous function - A function without a name is called an anonymous function. An anonymous function is often not accessible after its initial creation.


// // promises

// // async await

// // fetch api

// // arrow function

// // destructuring

// // spread operator

// // rest operator

// // classes

// // modules

// // generators

// // symbols






