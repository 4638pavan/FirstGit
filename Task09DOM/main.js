var form =document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
var item = document.getElementsByClassName("list-group-item");
//FORM SUBMIT EVENT
form.addEventListener("submit",addItem);
//DELETE EVENT
itemList.addEventListener("click",removeItem);
//FILTER EVENT
filter.addEventListener("keyup", filterItems);

//ADDING EDIT BUTTON TO ALL LIST ITEM
for(let i=0;i<item.length;i++){
    var editBtn =document.createElement("button");
    editBtn.className="btn btn-sm float-right editBtn";
    editBtn.appendChild(document.createTextNode("EDIT"));

    item[i].appendChild(editBtn);
}

//ADD ITEM FUNCTION
function addItem(e){
    e.preventDefault();
  
    //GET INPUT VALUE
    var newItem = document.getElementById("item").value;
    var description = document.getElementById("description").value;

    //CREATE NEW LI ELEMENT
    var li = document.createElement("li");
    
    //ADD CLASS
    li.className="list-group-item";
    
    //ADD TEXT NODE WITH INPUT VALUE
    li.appendChild(document.createTextNode(newItem));

    //CREATE DELETE BUTTON ELEMENT
    var deleteBtn = document.createElement("button");
    var descriptionNode = document.createTextNode(" "+description);
    li.appendChild(descriptionNode);
    //ADD CLASSES TO DELETE Btn
     deleteBtn.className = "btn btn-danger btn-sm float-right delete";
     
     //APPEND TEXT NODE
     deleteBtn.appendChild(document.createTextNode("x"));
    
     //APPEND BUTTON TO li
     li.appendChild(deleteBtn);
   
     //APPEND li TO LIST
    itemList.appendChild(li);
    


}

//FUNCTION REMOVE ITEM
function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are you Sure?")){
            var li =e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//FILTER ITEMS
function filterItems(e){
    //convert text to lowercase
    var text=e.target.value.toLowerCase();
    //GET lis
    var items = itemList.getElementsByTagName("li");
    //CONVERT TO AN ARRAY
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var description = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display = "block";
        }else if(description.toLowerCase().indexOf(text)!=-1){
            item.style.display = "block";

        } else{
            item.style.display = "none";
        }

    });

}