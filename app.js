// Data Object Model
/*
Tree with nodes(elements) created by browser
JavaScript can be used to read, write and manupulate DOM
Object oriented representation
*/

// getElementById() method takes id has input
/*
para = document.getElementById('paragraph');
para.innerText = "Wow java"
para.textContent = "Wow javaScript"
para.style.color = "green"
listItem = document.getElementById("list");
listItem.style.color = 'gray'
*/

// querySelector() method takes element as input 

listItem = document.querySelector('li:last-child');
listItem.style.color = 'gray';
unorderedList = document.querySelector('ul');
unorderedList.style.color = "green";
console.log(unorderedList);


// document.getElementsByClassName()


// querySelectorAll()
/*const list = document.querySelectorAll("div.a  li#li ,  div.a li#l");
console.log(list)
arr = Array.from(list);
arr.forEach(function(e){
e.style.color = "red";
});*/