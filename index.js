

  
const ulDOM = document.querySelector("#list");
const task = document.querySelector("#task");

let todoArr = localStorage.getItem("Items") ? JSON.parse(localStorage.getItem("Items")) : [];

const toastButtonDOM = document.querySelector("#liveToastBtn");
toastButtonDOM.addEventListener("click",createNewElement);

const inputTextDOM = document.querySelector("#task")
showItem()
function createNewElement() {
  if(inputTextDOM.value.trim('').length != 0)
  {  
    todoArr.push(inputTextDOM.value);
    localStorage.setItem("Items",JSON.stringify(todoArr));
    $('.toast.success').toast('show');
    addItem(inputTextDOM.value,todoArr.length-1);

  } else {
    $('.toast.error').toast('show');
  }
  inputTextDOM.value=""
}
var isChecked = false

function showItem(){
  if(localStorage.getItem("Items"))
  {
      todoArr.forEach((item,index) => {
          addItem(item,index)            
      });
  }        
}

function addItem(item,index) {
  let liDOM = document.createElement("li");
  let textNode = document.createTextNode(item);
  let buttonDOM = document.createElement("button");
  buttonDOM.classList.add("close");
  buttonDOM.innerText = "x";
  buttonDOM.addEventListener("click",function(){deleteItem(index,buttonDOM)});
  liDOM.addEventListener("click", function(e) {
    if (isChecked) {
        e.target.classList.remove("checked")
        isChecked = false;
      } else {
        e.target.classList.add("checked")
        isChecked = true
      }
  });
  liDOM.append(textNode);
  liDOM.append(buttonDOM);
  ulDOM.append(liDOM);
}

function deleteItem(index,d) {
    todoArr.splice(index,1);
    localStorage.setItem("Items",JSON.stringify(todoArr));
    d.parentElement.remove();

}



