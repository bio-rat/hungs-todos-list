const TODOS_KEY = "todos";

let masterTodoList = [
  {"text" : "dunno man 1",
  "isDone" : false},
  {"text" : "dunno man 2",
  "isDone" : false},
  {"text" : "dunno man 3",
  "isDone" : false}
];

masterTodoList = JSON.parse(localStorage.getItem(TODOS_KEY));

let addTodo = () => {
  let inputField = document.querySelector("#add-item");
  let inputValue = inputField.value;
  masterTodoList.push({text: `${inputValue}`, isDone: false});
  inputField.value = "";

  updateTodoList();

}

let updateTodoList = () => {
  let HTML = "";
  for (let i = 0; i < masterTodoList.length; i++) {

    //if isDone and checkbox is checked
    if (masterTodoList[i].isDone && !showBtn.checked) {
      HTML += `<li><strike>${masterTodoList[i].text}</strike><a href='#' onclick='remove(${i})'> X </a><a href='#' onclick='toggleDone(${i})'> Mark Undone</a></li>\n`;

    } else if (!masterTodoList[i].isDone) {
      HTML += `<li>${masterTodoList[i].text}<a href='#' onclick='remove(${i})'> X </a><a href='#' onclick='toggleDone(${i})'> Mark Done</a></li>\n`;
    } 
  }

  let todoList = document.querySelector("#todo-list");
  todoList.innerHTML = HTML;

  store();
  console.log(masterTodoList);
}

//remove the item from list
let remove = (i) => {
  masterTodoList.splice(i, 1);

  updateTodoList();
}

//toggle between done and undone
let toggleDone = (i) => {
  masterTodoList[i].isDone = !masterTodoList[i].isDone;

  updateTodoList();
}

//store to local storage
let store = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(masterTodoList));
}

//show undone button
let showBtn = document.querySelector("#show-btn");
showBtn.addEventListener("change", updateTodoList);

//add items button
let addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", addTodo);



updateTodoList();
