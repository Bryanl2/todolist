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

function prepared(){
 
  var app = new Vue({
    el: '#todo-app',
    data: {
      title: 'What do I need to do today',
      list:list,
      newTaskName:'',
    },
    computed:{
      todoList(){
        return this.list.filter((task)=>!task.done);
      },
      doneList(){
        return this.list.filter((task)=>task.done);
      }
    }
    ,
    methods:{
      CreateTask(){
        this.list.push({
          id: list.length + 1,
          name: this.newTaskName,
          done: false,
        })
        this.newTaskName='';
      }
    }
  })
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


