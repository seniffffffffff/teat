import React, { useState,useEffect } from 'react'
import TodoList from './TodoList'
import {Context} from "./context"
import {Footer} from "./component/Footer";
import "./index.css"

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

  const [count,setCount] = useState(0)

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
        let count = 0
        if(todo.id === id){
          count++
          console.log(count)
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
        <h1 className='zagolovok'>Your todo list</h1>

          <div className="input-field">
            <input
            className={"input-text"}
            type="text"
            value={todoTitle}
            onChange={event => setTodosTitle(event.target.value)}
            onKeyPress={addTodo}
            placeholder='Enter your task here'
            />
            <TodoList todos={todos} />
            <Footer></Footer>
          </div>
      </div>
      </Context.Provider>
    );
}