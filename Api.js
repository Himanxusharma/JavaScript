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

// xhr get json data

document.getElementById("check-btn").addEventListener("click", loadUser);
function loadUser() {
  console.log("load user");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "user.json", true);
  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);
      const user = JSON.parse(this.responseText);
      const output = `
            <ul class="collection">    
                <li class="collection-item avatar">
                <img src="${user.avatar} " alt="" class="circle">
                <span class="title">ID : ${user.id}</span>
                <p>${user.first_name} <br>
                ${user.last_name}<br>
                ${user.email}
                </p>
                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
            </ul>
            `;
      document.getElementById("name-list").innerHTML = output;

      console.log(user);
    }
  };

  xhr.send();
}
