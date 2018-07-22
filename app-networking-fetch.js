document.querySelector("#btn-1").addEventListener("click", getText);
document.querySelector("#btn-2").addEventListener("click", getJson);
document.querySelector("#btn-3").addEventListener("click", getApi);
const output = document.querySelector("#output");


function getText(e) {
    fetch("dummy.txt", {

        method: "GET",
        headers: new Headers({
            'Content-Type': 'text/plain'
        })
    })
        .then(function (res) {

            return res.text();

        })
        .then(function (text) {
            output.innerHTML = text;
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getJson(e) {
    fetch("git.json", {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'text/plain'
        })
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (json) {
            output.innerHTML = json.itemCount;
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getApi(e) {
    fetch("https://api.github.com/users",
        {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'text/plain'
            })

        }
    )
        .then(function (res) {
            return res.json();
        })
        .then(function (json) {
            out = ``;
            json.forEach(item => out += `${item.login} <br>`);
            output.innerHTML = out;
            return json[0].login;
        })
        .catch(err => console.log(err))
}