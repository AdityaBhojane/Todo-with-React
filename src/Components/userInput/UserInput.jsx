import { useState } from "react"


function UserInput({setTodos}) {
  const [userInput, setUserInput] = useState("");
  const [count,setCount] = useState(0)
  console.log(userInput)
  return (
    <>
        <input
          value={userInput}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs"
          onChange={(e)=> setUserInput(e.target.value)}
           />
          <button
           className="btn btn-outline btn-primary mx-10"
           onClick={()=>{
            if(userInput == ''){
                alert('Please Enter some text')
            }else{
                setTodos((PreTodos)=> [...PreTodos,{id:count,text:userInput,mark:false}]);
                setCount((preCount)=> preCount + 1);
                setUserInput("")
            }
           }}
           >
            Primary
           </button>
    </>
  )
}

export default UserInput