// adding the async keyword before the function keyword makes the function return a promise.
// keyword await waits for the promise to be resolved . Await can be used instead of then()
// when getting values from functions returning a promise.


// get users will return a promise
async function getUsers(url) {

    // using await to wait till fetch is resolved
    try {
        const res = await fetch(url);
        // using awiat till returning json is resovled
        const json = await res.json();

        return json;
    } catch (err) {
        // error handling using async/await
        await Promise.reject(new Error(err));
    }

}

// same code without using async/await
function getUsersP(url) {
    return new Promise((resolve,reject) => {
        fetch(url)
            // after fetch is reolved
            .then(res => res.json())
            // after getting json  is resolved return json
            .then(json => resolve(json))
            // error handling using promises
            .catch(err => reject(err));
    });

}

// both give the same results
getUsers("https://jsonplaceholder.typicode.com/users").then(json => console.log(json)).catch(err => console.log(err));
getUsersP("https://jsonplaceholder.typicode.com/users").then(json => console.log(json)).catch(err => console.log(err));

