
// // Custom Http Library
// // Must have link the this custom js above the js where you use
function myHttp(){
    this.http =  new XMLHttpRequest();
}

myHttp.prototype.get = function(url,callback){

    this.http.open('GET',url,true)
    this.http.onload= function(){
        if(this.status ===200 ){
            callback(null,this.responseText)
        }else{
                callback('There is Error '+ this.status)
        }
    }
    this.http.send();
}



// // Create POST request
myHttp.prototype.post = function(url,data,callback){

    this.http.open('POST',url,true)
    this.http.setRequestHeader('Content-type','application/json')
    this.http.onload= function(){
            callback(null,this.responseText)
    }
    this.http.send(JSON.stringify(data));
}

// // Create PUT request
myHttp.prototype.put = function(url,data,callback){

    this.http.open('PUT',url,true)
    this.http.setRequestHeader('Content-type','application/json')
    this.http.onload= function(){
            callback(null,this.responseText)
    }
    this.http.send(JSON.stringify(data));
}

// // Create DELETE request
myHttp.prototype.delete = function(url,callback){

    this.http.open('DELETE',url,true)
    this.http.onload= function(){
            callback(null,'post is deleted')
    }
    this.http.send();
}