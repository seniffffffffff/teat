import React, { useState,useEffect } from 'react'
import TodoList from './TodoList'
import {Context} from "./context"
import Index from "./component/Footer/index";
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

    let count
     let values = todos.length

    const cheaKed = event => {
        if (event.target.checked){
          values--
          console.log(values)
          return  <p>values</p>
        } else {
          console.log(values)
          return <p>values</p>
        }
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
        toggleTodo, removeTodo , cheaKed
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
            <Index values={values} />
          </div>
      </div>
      </Context.Provider>
    );
}