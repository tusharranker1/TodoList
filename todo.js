document.getElementById("headingSpan").classList.add("headingSpanAnimation")
const list = document.getElementById("list")
const text1=document.getElementById("writeTheWork")

const listId = "workItems";
//===variables
let listArray;
let id;

//get item from local storage
let data = localStorage.getItem("TODO")
if(data){
    listArray = JSON.parse(data)
    id=listArray.length;
    loadlist(listArray)
}else{
    listArray=[];
    id=0;
}

function loadlist(array)
{
    array.forEach(function(item)
    {
        addTodo(item.name,item.trash,item.id)
    })
}

//clear local storage

document.getElementById("resetBtn").addEventListener("click",function()
{
    localStorage.clear()
    location.reload()
})

// ==========Functions==============
function addWork(event)
{
    event.preventDefault();
    const todo=text1.value
    if(todo){
        addTodo(todo,false)
        listArray.push({
            name : todo,
            trash : false,
            id : 0

        })
        localStorage.setItem("TODO",JSON.stringify(listArray))
        id++;
    }
    text1.value="";
    
}

function addTodo(todo,trash)
{
    if(trash){return;}
    const item = `<div class="${listId}">
                    <div>${todo}</div>
                    <button>Delete</button>
                 </div>`
    const position = "beforeend"
    list.insertAdjacentHTML(position,item)
}

function removeTodo(element)
{
    element.parentNode.parentNode.removeChild(element.parentNode);
    listArray[element.id].trash = true;
    localStorage.setItem("TODO",JSON.stringify(listArray))
}

//targeting the element dynamically
list.addEventListener("click",function(event)
{
    const element = event.target;
    removeTodo(element);
})
// addTodo("coffee",true)
// insertAdjacentHTML(position,item)

