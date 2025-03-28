import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Msg",
      completed: false,
    },
  ],

  //functions that will come along with the TodoContext and list of todos
  addTodo: (todo)=>{},
  updateTodo: (id, Todo)=>{},
  deleteTodo: (id)=>{},
  toggleComplete: (id)=>{}
});


export const useTodo =  ()=>{
  return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;