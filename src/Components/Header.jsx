import React, { useState } from 'react'
import { UseTodo } from '../Context';

const Header = () => {
    const[todo, setTodo]=useState();
    const{addTodo}=UseTodo();

    const add =(e)=>{
      e.preventDefault()
      if(!todo)return 
      addTodo({todo , completed : false})
      setTodo("")
    }

  return (
  <>
  <div className="m-auto text-center text-xl">
  <div className='text-4xl pt-6 tracking-wide font-bold'>
    <h1>Todo Using React</h1><br/>
  </div>
  <div >
    <form onSubmit={add}>
    <input type="text" className='border-2 p-2 outline-0 w-96 rounded-lg text-black mr-1 ' placeholder='Enter your Task' value={todo} onChange={(e)=>setTodo(e.target.value)} />
   
    <button type='submit' className='border-2 p-2 px-4 outline-0 rounded-lg bg-pink-500 mr-1 mt-2'>Add</button>
    </form>
  </div>
  </div>
  </>
  )
}

export default Header
