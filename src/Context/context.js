import { createContext, useContext } from "react";
export const TodoContext = createContext({
    todos: [{
        id:1,
        title:"Todo 1",
        completed:"false"
    }],

    addTodo:(todo)=>{},
    updateTodo:(id , todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const ContextProvider =TodoContext.Provider

export const UseTodo=()=>{
    return useContext(TodoContext);
}