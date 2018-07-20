// Callbacks

// Functions are first class objects in java-script and 
// hence can be passed as parameters into another function.
// Callback functions are run at a later time in the calling 
// functions . Callback functions are  inner functions and hence
// essentially closures. These functions can access the global
// as well as the calling functions variables.
// They are executed just like any other code in a functions 
// body at a specific time and hence are "called" back.
// Callback functions are not passed with () as they are not
// immediatly called.The calling function can call this function
// at a later time.They can also be passed as anonymous functions.
// Make sure that callback parameter passed by users ia a callback
// or will result in runtime error.

// Callbacks can be synchronous(as in forEach()) or asynchronous(as in
// setTimeout). 

// We will mimic a server and see sync vs asyc and also the use of callbacks
const posts = [{
    name: "One",
    age: 20
},
{
    name: "Two",
    age: 30
}];


function createPost(post) {
    setTimeout(function () {
        posts.push(post);
    }, 3000);

}


function getPosts() {

    setTimeout(function (output = '') {

        posts.forEach(post => output += `<li>${post.name}</li>`);
        document.body.innerHTML = output;

    }, 1000);

}



// Uncomment getPosts and comment out the below section and run it.
// Later comment it again and uncomment the below section. 
//     createPost({
//        name: 'Three',
//        age: 30
//     });
// getPosts();



// This will display only the first two posts and can be fixed 
// with callbacks


function createPostAsync(post, callback) {
    setTimeout(function () {
        posts.push(post);
        // validating if passed parameter is actually a callback
        if (typeof callback === "function") {
            callback();
        }
    }, 3000);
}

createPostAsync({
    name: 'Three',
    age: 30
}, getPosts);






