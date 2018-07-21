const posts = [{
    name: "One",
    age: 20
},
{
    name: "Two",
    age: 30
}];


function getPosts() {

    setTimeout(function (output = '') {

        posts.forEach(post => output += `<li>${post.name}</li>`);
        document.body.innerHTML = output;

    }, 1000);

}

// Promises can be used instead of callbacks . 
// They have a usual syntax of 
// return new Promise(function(resolve,reject){   
//      if(successfull){
//       resolve(data);
//      }else{
//         reject(data)
//      }
//  }
// });
function createPostAsync(post) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            posts.push(post);
            resolve();
        }, 3000);
    });
}


// then() to handle a fulfilled promise and reject to 
// handle a error we use a catch(). The catch says if any
// of the then()'s went wrong.
createPostAsync({
    name: 'Three',
    age: 30
}, getPosts)
    .then(getPosts)
    .catch(function (err) {
        console.log(err);
    });






