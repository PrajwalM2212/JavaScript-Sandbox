// Data Object Model
/*
Tree with nodes(elements) created by browser
JavaScript can be used to read, write and manupulate DOM
Object oriented representation
*/

/*
para = document.getElementById('paragraph');
para.innerText = "Wow java"
para.textContent = "Wow javaScript"
para.style.color = "green"
listItem = document.getElementById("list");
listItem.style.color = 'gray'
*/

listItem = document.querySelector('li:last-child');
listItem.style.color = 'gray';
unorderedList = document.querySelector('ul');
unorderedList.style.color = "green";
console.log(unorderedList);