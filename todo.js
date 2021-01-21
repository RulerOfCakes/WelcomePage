const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let maxId = 0;

let actualToDos = [];



function deleteToDo(event){
  const li = event.target.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = actualToDos.filter(function(todo){
    return todo.id !== parseInt(li.id);
  })
  actualToDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(actualToDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌"
  delBtn.addEventListener("click", deleteToDo);
  const span = document.createElement("span");
  const newId = maxId + 1;
  maxId = maxId + 1;
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  actualToDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
    const parsedToDos = JSON.parse(toDos);
    parsedToDos.forEach(function(toDo){
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);

}

init();