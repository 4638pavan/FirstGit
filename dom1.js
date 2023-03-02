var abc =document.getElementsByClassName("list-group-item");
console.log(abc);
abc[2].style.backgroundColor="green";
for(var i=0;i<abc.length;i++){
    abc[i].style.fontWeight="bold";
   abc[i].style.color="red";
}