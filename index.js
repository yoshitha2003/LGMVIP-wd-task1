var todobtn = document.getElementById("todoBtn");
var todolist = document.querySelector(".todolist");
var totaltask = document.getElementById("totaltask");
var todoinput = document.getElementById("todoinput");

var taskcount = 0;

// add event listneer
todobtn.addEventListener("click", onTodoAdd);
todolist.addEventListener("click",checkdelbtn);

//functoin
function onTodoAdd()
{
   
   taskcount=taskcount+1;
    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Create LI
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText=todoinput.value;
    todoDiv.appendChild(newTodo);

    // check button 
    const comBtn = document.createElement("button");
    comBtn.innerHTML='C';
    comBtn.classList.add("comBtn");
    todoDiv.appendChild(comBtn);
    // del button 
    const delBtn = document.createElement("button");
    delBtn.innerHTML='X';
    delBtn.classList.add("delBtn");
    todoDiv.appendChild(delBtn);
    todolist.appendChild(todoDiv);

    console.log("On Add button click");
    todoinput.value="";
    totaltask.innerText=taskcount;
  
}

function checkdelbtn(e)
{
    console.log(e.target.classList);
    const item = e.target;

    if(item.classList[0]==='delBtn')
    {
        console.log("delete");
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend",function()
        {
            todo.remove();
        })
       
        taskcount=taskcount-1;
        totaltask.innerText=taskcount;
   
    }
    if(item.classList[0]==='comBtn')
    {
        console.log("Complite");
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        
    
    }
}