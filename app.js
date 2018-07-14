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
/*
listItem = document.querySelector('li:last-child');
listItem.style.color = 'gray';
unorderedList = document.querySelector('ul');
unorderedList.style.color = "green";
console.log(unorderedList);


// document.getElementsByClassName()
// document.get

// querySelectorAll()
/*const list = document.querySelectorAll("div.a  li#li ,  div.a li#l");
console.log(list)
arr = Array.from(list);
arr.forEach(function(e){
e.style.color = "red";
});*/



// Traversing the DOM

/*
    let val = document.querySelector("ul");
    let items = document.querySelector("li");

    // get child nodes which is a node list including line breaks as "text"
    let nodes = val.childNodes;
    let nodeOne = nodes[0].nodeType

    /*
    Node types description
    1- element
    2- attribute
    3- text node
    8 - comment
    9 - document itself
    10 - Doctype
    */
/*
    // get children which is a html collection
    const children = val.children;
    const child = children[0];
    child.innerHTML = "Hello";
    
    // we can also get children of children
    let child_child = document.querySelector("body").children[2].children;

    console.log(val.previousElementSibling);

*/
    // we also have  lastChild , lastElementChild, firstChild, firstElementChild
    // element.childElementCount
    // element.parentNode , element.parentElement
    // element.nextSibling, element.nextElementSibling
    // element.previousSibling, element.previousElementSibling
    // all methods can be chained to traverse
    // textContent, innnerHTML,innerText,children,childNodes


// Creating Elements

/*
    // create an element using document.createElement()

    const li = document.createElement("li");
    // add class using element.className
    li.className = "list-item"
    // add id using element.id
    li.id = "li"
    // add attribute using element.setAttribute
    li.setAttribute("title","a list item");
    // create a text using document.createTextNode()
    const text = document.createTextNode("Hello World");
    // insert text in li using element.appendChild()
    li.appendChild(text);
    // append the list-item to unordered-list
    ul = document.querySelector("ul");
    ul.appendChild(li);

    // createElement,createTextNode,className,id,setAttribute,appendChild,innerHTML

    console.log(li);
    */

// REPLACING ELEMENTS


const oldListItem = document.getElementById('li');
const newListItem = document.createElement("li");
newListItem.id = "li";
newListItem.appendChild(document.createTextNode("New Chocolate"));
// get parent
const parent = oldListItem.parentElement;
// replace the child of the parent
parent.replaceChild(newListItem,oldListItem);
