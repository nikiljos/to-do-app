let taskArray=[];
document.getElementById("button").onclick=()=>{
    let taskInput=document.getElementById("input");
    let task = taskInput.value;
    if(task.length<=0){
        return;
    }
    taskArray.push(task)
    renderList();
    taskInput.value=""
}

document.getElementById("input").addEventListener("keyup",(e)=>{
    if(e.key=="Enter"){
        document.getElementById("button").click()
    }
})



document.getElementById("todolist").onclick=e=>{
    // console.log(value)
    if(e.target.matches(".edit")||e.target.matches(".delete")){
        let task = e.target.parentElement.innerText.split("\n")[0];
        let action = e.target.classList[0]
        console.log(task,action);
        
        let taskIndex=taskArray.findIndex(elt=>{
            if(elt==task){
                return true;
            }
        })

        if(action=="delete"){
            taskArray.splice(taskIndex,1);
        }
        else{
            let newTask=prompt("Please insert the updated task!",task)
            if(newTask==null||newTask==""){
                alert("Please enter a valid task name");
                return
            }
            taskArray[taskIndex]=newTask
        } 
        renderList()      
    }
}

function renderList(){
    let todoList = document.getElementById("todolist");
    todoList.innerHTML="";
    taskArray.forEach(item=>{
        console.log(item,todoList)
        let todoItem=document.createElement("li");
        let editButton = document.createElement("a");
        
        let deleteButton = document.createElement("a");
        editButton.setAttribute("class","edit")
        deleteButton.setAttribute("class","delete")
        let seperator=document.createElement("span");
        seperator.innerText=" | "
        editButton.innerText="Edit";
        deleteButton.innerText = "X";
        todoItem.innerText=item

        todoItem.appendChild(deleteButton);
        todoItem.appendChild(seperator);
        todoItem.appendChild(editButton)
        
        todoList.appendChild(todoItem);
    })
}
