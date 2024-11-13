//eventListeners work only for existing elements not for js created elements
let button = document.querySelector("button");
let list = document.querySelector("ul");
let inp = document.querySelector("input");

button.addEventListener("click", function(){
    let listItem = document.createElement("li");
    listItem.innerText = inp.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";
    deleteBtn.classList.add("delete");

    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);
    inp.value = "";
})

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         let parent = this.parentElement;
//         parent.remove();
//     })
// }

//Event Delegation -> Bubbling
list.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON") {
        let item = event.target.parentElement;
        item.remove();
        console.log("deleted");
    }
})