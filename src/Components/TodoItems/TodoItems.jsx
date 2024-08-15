import { useState } from "react";

function TodoItems({ text, mark,count,todos,setTodos }) {
  const [edit, setEdit] = useState(true)
  const [todoMsg,setTodoMsg] = useState(text)

  function MarkTodo(count){
    let newTodos = [...todos]
    for (let i = 0; i < todos.length; i++) {
        if(todos[i].id == count){
            // newTodos[i] = {...newTodos[i], mark:true}
            newTodos[i] = {id:newTodos[i].id, text:newTodos[i].text, mark:newTodos[i].mark? false:true }
            break;
        } 
    }
    setTodos(newTodos);
    console.log('done');
  }

  function DeleteTodo(count){
    let newTodos = [...todos]
    for (let i = 0; i < todos.length; i++) {
        if(todos[i].id == count){
            // newTodos[i] = {...newTodos[i], mark:true}
            newTodos.splice(i,1)
            break;
        } 
    }
    setTodos(newTodos);
    console.log('done');
  }

  function EditTodo(){
    let newTodos = [...todos]
    for (let i = 0; i < todos.length; i++) {
        if(todos[i].id == count){
            newTodos[i] = {...newTodos[i], text : todoMsg}
            break;
        } 
    }
    setTodos(newTodos);
    setEdit((Pre)=> Pre? false:true)
  }
  console.log(edit)
  console.log(todos)
  return (
    <>
      <div className="flex justify-between font-semibold my-5 mx-2 w-full"> 
      <div className="flex items-center w-full">
            <label htmlFor="#" className={`${mark? 'line-through text-red-800':''}`}>
                {count+1}.
            </label>
            <input
            value={todoMsg}
            onChange={(e)=>{setTodoMsg(e.target.value)}}
            type="text"
            placeholder="Type here"
            className={`input w-full max-w-xs ${mark? 'line-through text-red-800':''} focus:border-none focus:outline-none`}
            readOnly={edit}
            />
      </div>
      <div className="flex gap-5 mx-5">
        <button onClick={()=> MarkTodo(count)} className="btn btn-outline btn-success">{mark? "Undo":"Mark"} </button>
        <button onClick={()=> DeleteTodo(count)} className="btn btn-outline btn-error" >Delete</button>
        <button onClick={()=> EditTodo()}  className="btn btn-outline btn-warning">{!edit? "Save":"Edit"}</button>
      </div>
      </div>
    </>
  );
}

export default TodoItems;
