import TodoItems from "../TodoItems/TodoItems";

function Todo({todos, setTodos}) {
  return (
    <>
        <div>
           { todos.map((items,index)=>{
                return <TodoItems key={index} count={items.id} text={items.text} mark={items.mark} setTodos={setTodos} todos={todos} />
            })}
        </div>

    </>
  )
}

export default Todo;