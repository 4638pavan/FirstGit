var itemList = document.querySelector("#items");
//PARENTNODE //
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor ="#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode);

//PARENTELEMENT //
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor="green";
// console.log(itemList.parentElement.parentElement);

//CHILDNODES //
//console.log(itemList.childNodes);

//CHILDRENNODES //
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor="green";

//FIRSTCHILD //
//console.log(itemList.firstChild);

// //FIRSTELEMENTCHILD //
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent="Hello";

//LASTELEMENTCHILD //
//console.log(itemList.lastELementChild);
//itemList.lastElementChild.textContent="Hello";

//NEXTSIBLING //
// console.log(itemList.nextSibling);

//NEXTELEMENTSIBLING //
// console.log(itemList.nextElementSibling);

//PREVIOUSSIBLING //
//console.log(itemList.previousSibling);

//PREVIOUSELEMENTSIBLING //
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.backgroundColor="green";


//HEllo word before item Lister

//CREATE ELEMENT

//CREATE A DIV
var newDiv = document.createElement("div");
//ADD CLASS
newDiv.className ="Hello";
//ADD ID
newDiv.id="hello";
//ADD ATTRIBUTE
newDiv.setAttribute("title","Hello Div");
//CREATE A TEXT NODE
var newDivText =document.createTextNode("HEllo word");
//ADD TEXT TO DIV
newDiv.appendChild(newDivText);

var container = document.querySelector("header .container");
var h1 =document.querySelector("header h1");

console.log(newDiv);
newDiv.style.fontSize="30px";
container.insertBefore(newDiv,h1);

//HEllo word before item 1

var newUl = document.createElement("li");
 var text = document.createTextNode("HEllo word");
newUl.appendChild(text);
const list =document.getElementById("items");
list.insertBefore(newUl,list.children[0]);
