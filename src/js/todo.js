let inputTask = document.getElementById("newTask");
let taskList = document.getElementById("taskList");
let createBtn = document.getElementById("addTaskBtn");
let currentlyEditedTask = null;

function onClickCreateTask() {
  if (inputTask.value !== "") {
    if (currentlyEditedTask) {
      currentlyEditedTask.querySelector("span").textContent = inputTask.value;
      currentlyEditedTask = null;
      createBtn.innerHTML = "Add Task";
    } else {
      let listElement = createTaskElement(inputTask.value);
      taskList.appendChild(listElement);
    }

    inputTask.value = "";
  }
}

function createTaskElement(taskText) {
  let listElement = document.createElement("li");
  let spanElement = document.createElement("span");
  spanElement.textContent = taskText;

  let completeBtn = createButton("&#10004", "complete", onClickComplete);
  let deleteBtn = createButton("&#128465", "delete", onClickDelete);
  let editBtn = createButton("&#9998;", "edit", onClickEdit);

  listElement.appendChild(spanElement);
  listElement.appendChild(completeBtn);
  listElement.appendChild(deleteBtn);
  listElement.appendChild(editBtn);

  return listElement;
}

function createButton(text, className, clickHandler) {
  let button = document.createElement("button");
  button.innerHTML = text;
  button.setAttribute("class", className);
  button.addEventListener("click", clickHandler);
  return button;
}

function onClickComplete(event) {
  let listElement = event.target.parentElement;
  listElement.classList.toggle("completed");
}

function onClickEdit(event) {
  let listElement = event.target.parentElement;
  let spanElement = listElement.querySelector("span");
  inputTask.value = spanElement.textContent;

  currentlyEditedTask = listElement;

  createBtn.innerHTML = "Update Task";
  createBtn.removeEventListener("click", onClickCreateTask);
  createBtn.addEventListener("click", onClickCreateTask);
}

function onClickDelete(event) {
  let element = event.target.closest("li");
  element.remove();
  currentlyEditedTask = null;
  createBtn.innerHTML = "Add Task";
}

function toDoInit() {
  createBtn.addEventListener("click", onClickCreateTask);
}

export { toDoInit };
