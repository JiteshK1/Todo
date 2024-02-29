"use client"

import Chip from '@mui/material/Chip'
import DeleteIcon from '@mui/icons-material/Delete';
import { SvgIcon } from '@mui/icons-material';




import { useState } from "react";

export default function Home() {
  const [desc, setdesc] = useState("")
const [mainTask, setmainTask] = useState([])
  const handleSubmit=(e)=>{
      e.preventDefault();
      setmainTask([...mainTask,{desc}])
      console.log(mainTask)
     setdesc("")
  }

  const deleteHandler=(i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }
  let  renderTask = "No task available"
  if(mainTask.length>0){
  renderTask = mainTask.map((t,i)=>{
    return(
      <li key={i} class="py-4">
      <div class="flex items-center">
          <label for="todo1" class="ml-3 block text-gray-900">
              <span class="text-lg font-medium">{t.desc}</span>
          </label>
          <button onClick={()=>{
        deleteHandler(i)
      }} class="flex-no-shrink hover:bg-red-300 p-1 ml-2 border-2 rounded text-red border-red">Delete</button> 
   
      </div>
  </li>
      )
     
  })
}

  return (
         <>
      <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
    <div class="px-4 py-2">
        <h1 class="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
    </div>
    
            <form onSubmit={handleSubmit} class="w-full max-w-sm mx-auto px-4 py-2">
        <div class="flex items-center border-b-2 border-teal-500 py-2">
            <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                onChange={(e)=>{setdesc(e.target.value)}} value={desc}
               type="text" placeholder="Add a task"/>
            <button 
                class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
                Add
            </button>
        </div>
    </form>
    <ul class="divide-y divide-gray-200 px-4">
    {renderTask}
    </ul>
    </div>
         </>
    );
}
