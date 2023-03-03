var abc=document.getElementsByClassName("list-group-item");
console.log(abc);
abc[3].style.visibility ="hidden";
abc[1].style.backgroundColor="green";


var abc =document.querySelectorAll(".list-group-item");
abc[1].style.color="green";

var odd=document.querySelectorAll("li:nth-child(odd)");
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor="green";
}

