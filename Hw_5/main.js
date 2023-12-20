'use strict';

let id = 0;
let url = new URL('http://tasks-api.std-900.ist.mospolytech.ru/api/tasks?api_key=50d2199a-42dc-447d-81ed-d68a443b697e');

function addTaskToPage (task) {

    const template = document.querySelector("#task-template");
    const taskElement = template.content.firstElementChild.cloneNode(true);
    taskElement.querySelector(".task-name").textContent = task.name;
    taskElement.id = task.id;
    console.log(task.status);
    if (task.status == "done") {
        document.querySelector("#done-list").append(taskElement);
    } else {
        document.querySelector("#to-do-list").append(taskElement);
    }

}

async function createTask (event) {

    const task = {};
    const form = document.querySelector(".formCreate");
    task.id = id + 1;    
    task.name = form.elements['name'].value;
    task.taskDesc = form.elements['taskDesc'].value;
    task.status = form.elements['status'].value;
    let taskData = new FormData();
    taskData.append("id", task.id);
    taskData.append("status", task.status);
    taskData.append("name", task.name);
    taskData.append("desc", task.taskDesc);
    // localStorage.setItem(task.id, JSON.stringify(task));
    

    await fetch(url, {
        method: "POST",
        body: taskData
    });
    id += 1;

    addTaskToPage(task);
}

const createButton = document.querySelector(".saveChanges");
createButton.addEventListener('click', createTask);
async function getListOfTasks () {
    // eslint-disable-next-line max-len
    const response = await fetch(url);
    let json = await response.json();
    const tasks = json['tasks'];
    tasks.forEach(task => {
        //console.log(task);
        addTaskToPage(task);
    });
}
let modalEdit = document.querySelector("#modal-edit");
modalEdit.addEventListener("show.bs.modal", (event) => {

    let taskId = event.relatedTarget.closest(".task").id;
    let data = JSON.parse(localStorage.getItem(taskId));
    let form = document.querySelector(".formEdit");
    form.elements["name"].value = data.name;
    form.elements["taskDesc"].value = data.taskDesc;
    form.elements["status"].value = data.status;
    form.elements["id"].value = data.id;
    
});
async function editChanges(event) {
    let form = document.querySelector(".formEdit");
    const task = {};
    task.id = form.elements["id"].value;    
    task.name = form.elements["name"].value;
    task.taskDesc = form.elements["taskDesc"].value;
    task.status = form.elements["status"].value;
    let taskElement = document.getElementById(task.id);
    taskElement.querySelector(".task-name").textContent = task.name;
    if (task.status == "0" && taskElement.parentElement.id == "done-list") {
        document.querySelector("#to-do-list").append(taskElement);
    // eslint-disable-next-line max-len
    } else if (task.status == "1" && taskElement.parentElement.id == "to-do-list") {
        document.querySelector("#done-list").append(taskElement);
    }
    let taskData = new FormData();
    taskData.append("id", task.id);
    taskData.append("status", task.status);
    taskData.append("name", task.name);
    taskData.append("desc", task.taskDesc);
    const response = await fetch(url);
    let json = await response.json();
    const tasks = json['tasks'];
    tasks.forEach(task => {
        console.log(task);
        
    });
}

    
const editBtn = document.querySelector(".editChanges");
editBtn.addEventListener('click', editChanges);
window.onload = getListOfTasks;
