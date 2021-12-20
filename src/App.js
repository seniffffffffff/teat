import React, { useState,useEffect } from 'react'
import TodoList from './TodoList'
import {Context} from "./context"

export default  function App() {
   const [todos,setTodos] = useState([])
   const[todoTitle, setTodosTitle] = useState("")


  useEffect( () => {
    const raw = localStorage.getItem("todos") || []
    setTodos(JSON.parse(raw))
  }, [])

    useEffect(() => {
    
      localStorage.setItem("todos", JSON.stringify(todos))
    
    }, [todoTitle])

    const addTodo = event => {
      if(event.key === "Enter"){
        setTodos([
          ...todos,
          {
            id:Date.now(),
            title: todoTitle,
            completed: false
          }
        ])
        setTodosTitle("")
      }
    }

    const removeTodo = id => {
      setTodos(todos.filter(todo => {
        return todo.id !== id
      }))
    }

    const toggleTodo = id => {
      setTodos(todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      }))
    }


    return (
      <Context.Provider value={{
        toggleTodo, removeTodo
      }}>
        <div className="container">
        <h2 className='zagolovok'>Your todo list</h2>

          <div className="input-field">
            <input 
            type="text"
            value={todoTitle}
            onChange={event => setTodosTitle(event.target.value)}
            onKeyPress={addTodo}
            placeholder='Enter your task here'
            />
            
          </div>

          <TodoList todos={todos} />
      </div>
      </Context.Provider>
    );
}