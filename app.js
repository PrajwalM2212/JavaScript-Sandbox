const div = document.querySelector("#text-holder"),
    btn = document.querySelector("#btn");


btn.addEventListener("click", getText);

function getText(e) {

    // AJAX or XmlHttpRequest
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "dummy.txt", true);

    /* xhr.onload = function () {
         if (this.status === 200) {
             div.textContent = this.responseText;
         }
     }*/

    xhr.onerror = function () {
        console.log("Error");
    }

    xhr.onloadstart = function () {
        div.textContent = `${xhr.readyState}`;
    }

    xhr.onloadend = function () {
        //alert(this.readyState);
    }

    /*
    Ready state values 
    0: Request not initialized
    1: connection established
    2: request received
    3: processing request
    4: response ready
    */

    xhr.onreadystatechange = function () {
        console.log(this.readystate);
        if (this.readyState === 4) {
            if (this.status === 200) {
                div.textContent = this.responseText;
            }
        } else {
            div.textContent = this.statusText;
        }
    }

    xhr.send();
}