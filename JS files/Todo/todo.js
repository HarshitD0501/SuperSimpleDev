const todolist = [{}];

function printelement(){
  let todostr='';

  for(let i=0;i<todolist.length;i++){
    const todoobject= todolist[i];
    const Name = todoobject.name;
    const Date = todoobject.date;
    const html = `
      <div>${Name}</div> 
      <div>${Date}</div> 
      <button class = 'Delete-button' onclick="
        todolist.splice(${i},1);
        printelement();
      ">Delete</button>`;
    todostr+= html;
  }

  document.querySelector('.js-printtodo').innerHTML = todostr;

}


function addTodo(){
  const nname=document.querySelector('.js-input-name').value;
  // console.log(name);
  console.log(todolist);
  const date = document.querySelector('.js-input-date');
  const values = date.value;
  console.log(values);
  todolist.push(
    {
      name:nname,
      date:values
    }
  );
  printelement();
  document.querySelector('.js-input-name').value='';
}
function add(event){
  if(event.key==="Enter"){
    addTodo();
  }
}
