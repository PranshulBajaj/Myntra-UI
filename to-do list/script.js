let toDoList=JSON.parse(localStorage.getItem('myTodo'))||[];

displayTasks();

function addTask(){
    let taskElement=document.querySelector('#task');
    let task = taskElement.value;
    let dateElement=document.querySelector('#due-date');
    let date = dateElement.value;

    toDoList.push({taskName:task,dueDate:date});
    localStorage.setItem('myTodo',JSON.stringify(toDoList));

    taskElement.value='';
    dateElement.value='';

    displayTasks();
}


function displayTasks(){
    let displayElement = document.querySelector('.display-tasks');
    let newHTML='';
    for(let i=0;i<toDoList.length;i++){
        let {taskName,dueDate} = toDoList[i];
        newHTML+=`
            <span>${taskName}</span>
            <span>${dueDate}</span>
            <button onclick="deleteTask(${i});">Delete</button>
        `
    }
    displayElement.innerHTML=newHTML;
}

function deleteTask(idx){
    toDoList.splice(idx,1);
    localStorage.setItem('myTodo', JSON.stringify(toDoList));
    displayTasks();
}
