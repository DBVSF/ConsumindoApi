var url = "http://localhost:8000";

function getUsuarios() {
    
    var data = new FormData();
    var xhr = new XMLHttpRequest();
    //xhr.withCredentials = true;
 
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var usuarios = JSON.parse(this.responseText);
            //faca algo
            console.log(usuarios);
        }
    });
    
    
    xhr.open("GET", url);
    xhr.send(data);
    
    
}
