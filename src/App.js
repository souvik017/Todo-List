import { useEffect, useState } from 'react';
import Header from './Components/Header';
import List from './Components/List';
import { ContextProvider } from './Context';

function App() {
  const[todos, setTodos]=useState([])
  const addTodo=(todo)=>{
    setTodos((prev)=>[{id: Date.now(), ...todo}, ...prev])
  }
  
  const updateTodo=(id , todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo === id ? todo : prevTodo))
  }
  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id !== id))
  }
  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id === id ? {...prevTodo , completed : !prevTodo.completed} : prevTodo))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect (()=> localStorage.setItem('todos',JSON.stringify([...todos])), [todos]);
  
  return (
<>
<ContextProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
<div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
      
                    <div className="mb-4">
                    <Header/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                  {todos.map((todo)=>(
                    <div key={todo.id} className='w-full'>
                      <List todo={todo} />
                      </div>
                  ))}
                    </div>
                    
                </div>
            </div> 


</ContextProvider>
</>
  );
}

export default App;
