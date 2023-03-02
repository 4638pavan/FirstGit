//EXAMINE THE DOCUMENT OBJECT//

// //console.log(document);
// console.log(document);
// console.log(document.URL);
// console.log(document.title);
// //document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent = "hello";
// console.log(document.forms[0]);
// console.log(document.links);
//console.log(document.images);

//GETELEMENTBYID //
//console.log(document.getElementById("header-title"));
//var headerTitle = document.getElementById("header-title");
//var header = document.getElementById("main-header");
//console.log(headerTitle);
//headerTitle.textContent = "Hello";
//headerTitle.textContent="Goodbye";
//headerTitle.innerHTML = "<h3>Hello</h3>";
//header.style.borderBottom =" solid 3px #000";

// //GETELEMENTSBYCLASSNAME //
// var items=document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent="hello 2";
// items[1].style.fontWeight ="bold";
// items[1].style.backgroundColor ="yellow";

// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor="grey";
// }

//GETELEMENTSBYTAGNAME //
// var li=document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent="hello 2";
// li[1].style.fontWeight ="bold";
// li[1].style.backgroundColor ="yellow";

// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor="red";
// }

//QUERYSELECTOR //
var header = document.querySelector("#main-header");
header.getElementsByClassName.borderBottom="solid 4px #ccc";

var input = document.querySelector("input");
input.value ="Hello World";

var submit = document.querySelector('input[type="submit"]');
submit.value="SEND";

var item =document.querySelector(".list-group-item");
item.style.color="red";

var allItem =document.getElementById('addItem');
allItem.style.color="green";
allItem.style.fontWeight = 'bold'