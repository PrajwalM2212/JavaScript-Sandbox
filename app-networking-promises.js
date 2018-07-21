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


function createPostAsync(post) {
    return new Promise(function(resolve,reject){
        setTimeout(function () {
            posts.push(post);
            resolve();    
        }, 3000);
    });
}

createPostAsync({
    name: 'Three',
    age: 30
}, getPosts).then(getPosts);






