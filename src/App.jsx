import { useState } from 'react'
import './App.css'
import Todo from './Components/Todo/Todo'
import UserInput from './Components/userInput/UserInput'

function App() {
  const [todos, setTodos] = useState([]);

  console.log(todos)
  return (
    <>
      <div className="w-1/2 h-1/2 absolute top-[20%] left-[50%] -translate-x-[50%] -translate-y-[20%]">
        <h1 className='text-3xl font-bold m-2 my-5'>Todo-list</h1>
        <div className="m-2">
        <UserInput setTodos={setTodos} />
        </div>
        <Todo todos={todos} setTodos={setTodos} />

      </div>
    </>
  )
}

export default App
