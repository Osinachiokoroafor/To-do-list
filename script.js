const taskInput = document.getElementById("task-input");
const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskTitle = taskInput.value.trim();

  if (!taskTitle) {
    alert("Please Enter Task");
    return;
  }

  const listItem = document.createElement('li');
  listItem.textContent = taskTitle;
  taskList.appendChild(listItem);
  const span = document.createElement('span');
  span.textContent = '×';
  listItem.appendChild(span);
  taskInput.value = "";

  
  localStorage.setItem("listItem", taskList.innerHTML);
});

taskList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    localStorage.setItem("listItem", taskList.innerHTML);
  } else if (e.target.tagName === 'SPAN') {
    const li = e.target.parentElement;
    li.remove();
    localStorage.setItem("listItem", taskList.innerHTML);
  }
});

showListData();

function showListData() {
  taskList.innerHTML = localStorage.getItem("listItem") || "";
}

function saveListData() {
  localStorage.setItem("listItem", taskList.innerHTML);
}

