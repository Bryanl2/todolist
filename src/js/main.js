let list = [
  {
    id: 1,
    name: "Replicar el eje del profe",
    done: true,
  },
  {
    id: 2,
    name: "Replicar el eje del profe 2",
    done: true,
  },
  {
    id: 3,
    name: "Replicar el eje del profe 3",
    done: false,
  },
  {
    id: 4,
    name: "Replicar el eje del profe 4",
    done: false,
  },
  {
    id: 5,
    name: "XXXX",
    done: false,
  },
];

const listContainer = document.querySelector("#list-content");
const listToDo=document.querySelector("#todo-list");
const nolistToDo=document.querySelector("#noTodo-list");
const titleNoToDo=document.querySelector("#TitlenoTodoList");
const titleToDo=document.querySelector("#TitleTodoList");

let itemsDo=0;
let itemsNoDo=0;


paintList(list);
paintTasksList(list);

function createTask(task) {
  const input = document.querySelector("#inputTask");
  list.push({
    id: list.length + 1,
    name: input.value,
    done: false,
  });
  input.value = "";
  paintList(list);
}

const checkTask = (checkbox, id) => {
  const task = list.find((element) => {

    return element.id === id;
  });

  task.done = checkbox.checked;

 
  paintList(list);
  paintTasksList(list);//Function that implements the item's movement
};

function paintList(lst) {
  let res = "";
  lst.forEach((element) => {
    res += renderListItem(element);
  });
  listContainer.innerHTML = res;
}

function renderListItem(item) {
  const isDone = item.done ? "is-done" : "";
  const checked = item.done ? "checked" : "";
  return `<li class="list-group-item list-item ${isDone}">
              <input type="checkbox" ${checked} aria-label="Checkbox for following text input" onclick="checkTask(this, ${item.id})"> ${item.name}
          </li>`;
}
//----------------------------------------Bryan LOGIC ---------------------------------------------------------------//

function paintTasksList(e){
  let elementsList="";
  let elementNoList="";
 
  e.forEach((element)=>{
    if(!element.done){
      elementsList+=RenderItem(element);
    }

    if(element.done){
      elementNoList+=RenderItem(element);
    }
  });
  let numberDo=NumberToDoList();
  let numberNoDo=NumberNoToDoList();

  listToDo.innerHTML=elementsList;
  titleToDo.innerHTML=numberDo;
  nolistToDo.innerHTML=elementNoList;
  titleNoToDo.innerHTML=numberNoDo;
 
}

function RenderItem(TodoItem){
  
  return `<li class="list-group-item list item">
              <p> ${TodoItem.name}</p>
          </li>`
}

function NumberToDoList(){
  let number=0;
  list.forEach((element)=>{
    if(!element.done){
      number=number+1;
    }
  });
  return `<h5 class="card-title" id="TitleTodoList">Todo List <span class="numberStyle">${number}</span></h5>`
};

function NumberNoToDoList(){
  let number=0;
  list.forEach((element)=>{
    if(element.done){
      number=number+1;
    }
  });
  return `<h5 class="card-title" id="TitlenoTodoList">No Todo List<span class="numberStyle">${number}</span></h5>`
};


