import './style.css'

interface Todo{
  title: string,
  isCompleted: boolean,
  readonly id: string,
}

const todos: Todo[] = [];

const todoContainer = document.querySelector(".todoContainer") as HTMLDivElement;
const todoInput = document.getElementsByTagName("input")[0] as HTMLInputElement;
const form = document.getElementById("myForm") as HTMLFormElement;

form.onsubmit = (event: SubmitEvent) => {
  event.preventDefault();
  const todo:Todo = {
    title: todoInput.value,
    isCompleted: false,
    id: String(Math.random() * 1000),
  }

  todos.push(todo);
  todoInput.value = "";
  renderTodo(todos);
}

const generateTodoItem = (item: Todo) => {
  const todo = document.createElement("div") as HTMLDivElement;
  todo.className = "todo";


  const checkBox = document.createElement("input") as HTMLInputElement;
  checkBox.setAttribute("type","checkbox");
  checkBox.className = "isCompleted";
  checkBox.checked = item.isCompleted;
  checkBox.onchange = () => {
    titlePara.className = checkBox.checked?"textCut": "";

    todos.find((i) => {
      if(i.id === item.id){
        i.isCompleted = checkBox.checked;
      }
    })
  }

  const titlePara = document.createElement("p") as HTMLParagraphElement;
  titlePara.innerText  = item.title;
  titlePara.className = item.isCompleted ? "textCut" :  " ";

  
  const button = document.createElement("button") as HTMLButtonElement;
  button.innerText = "X";
  button.className = "deleteBtn";
  button.onclick = () => {
    deleteTodo(item.id);
  }

  todo.append(checkBox, titlePara, button);
  todoContainer.append(todo);
}

const deleteTodo = (id: string) => {
  const index = todos.findIndex(item => item.id === id);
  todos.splice(index,1);
  renderTodo(todos);
}

const renderTodo = (todos: Todo[]) => {
  todoContainer.innerText = "";
  todos.forEach(item => {
    generateTodoItem(item);
  })
}