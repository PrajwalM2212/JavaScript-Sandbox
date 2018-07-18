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

/*
    const oldListItem = document.getElementById('li');
    const newListItem = document.createElement("li");
    newListItem.id = "li";
    newListItem.appendChild(document.createTextNode("New Chocolate"));
    // get parent
    const parent = oldListItem.parentElement;
    // replace the child of the parent
    parent.replaceChild(newListItem,oldListItem);
*/

// REMOVE ELEMENTS

/*
    const list = document.querySelectorAll("ul");
    const listItems = document.querySelectorAll("li");

    // remove elements directly by using the remove() function
    listItems[0].remove();
    // remove elements by calling removeChild()
    list[0].removeChild(listItems[1]);
    */

// Classes and Attributes
/*
    const list = document.querySelector("li");
    // set/create an attribute
    list.setAttribute("title","link")
    // remove an attribute
    list.children[0].removeAttribute("href");
    // check if attribute exists
    console.log(list.hasAttribute("title"));


    const ul = document.querySelector("ul");
    // add class using class list
    ul.classList.add("text");
    // remove class using class list
    ul.classList.remove("l");
    console.log(ul.className);
    */

// Event Listeners and event object 
// One can add event listeners by using addEventListener() method
   /* const li = document.querySelector("li");
    li.addEventListener("click", function (e) {
        e.target.classList.add("event")
        console.log(e.target);
    })*/


// MOUSE EVENTS 

  /*
    const body = document.querySelector("body");
    const para = document.querySelector("p");

    // mouse event function
    function eventRun(e){
        console.log(e.clientX);
        console.log(event.type);
        body.style.color = `rgb(${e.offsetX},${e.offsetY},70)`;
    }
    */

    // click event 
    //body.addEventListener("click",eventRun);

    // double click event
    //body.addEventListener("dblclick",eventRun);

    // mouse-up - after leaving the mouse-down
    //body.addEventListener("mouseup",eventRun);

    // mouse-down
    //body.addEventListener("mousedown",eventRun);

    // mouse-enter
    //para.addEventListener("mouseenter",eventRun);

    //mouse-leave
    //para.addEventListener("mouseleave",eventRun);

    //mouse-over
    //para.addEventListener("mouseover",eventRun);

    //mouse-out
    //para.addEventListener("mouseout",eventRun)

    // mouse-move
    //body.addEventListener("mousemove",eventRun);



// INPUT and KEY-EVENTS

    //const input = document.querySelector("input");
    //keydown
    //input.addEventListener("keydown",eventRun);

    //keyup
    //input.addEventListener("keyup",eventRun);

    //keypress
    //input.addEventListener("keypress",eventRun);

    //focus 
    //input.addEventListener("focus",eventRun);

    //blur
    //input.addEventListener("blur",eventRun);

    //cut 
    //input.addEventListener("cut",eventRun);

    //paste
    //input.addEventListener("paste",eventRun);

    //copy
    //input.addEventListener("copy",eventRun);

    //select 
    //input.addEventListener("select",eventRun);

    //input
    //input.addEventListener("input",eventRun);

    //change -- on select list

    //const select = document.querySelector("select");
    //select.addEventListener("change",eventRun);


    //function eventRun(e){
    //    console.log(e.type);
    //    console.log(e.target.value);
    //}


// EVENT BUBBLING
/*
    function runEvent(e){
        console.log(e.target);
    }

    const ulElement = document.querySelector("div ul");
    ulElement.addEventListener("click",runEvent);
    //console.log(ulElement);
    ulElement.parentElement.parentElement.addEventListener("click",function(e){
        console.log("funny");
    });
    */

// EVENT DELEGATION

/*
    const body = document.querySelector("body");
    body.addEventListener("click",function(e){
        if(body.firstElementChild.classList.contains("head1")){
        console.log("div found");
        }
    });
    console.log(body.firstElementChild.classList[1]);
*/

// Local Storage and session storage
    /*
    localStorage.setItem("name","prajwal");
    localStorage.removeItem("name");
    console.log(localStorage.getItem("name"));


    sessionStorage.setItem("age",20);
    console.log(sessionStorage.getItem("age"));
    sessionStorage.clear();
    */

    // local storage and seesion storage can store only strings,
    // so we have use JSON.stringify to store and JSON.parse to retrieve
    /*
    const values = [];
    const input = document.querySelector("input");
    input.addEventListener("blur",function(e){

        values.push(input.value);
        localStorage.setItem("tasks",JSON.stringify(values));

    });
    */

    /* values = JSON.parse(localStorage.getItem("tasks"));
        values.forEach(function(item){
            console.log(item);
        });*/
