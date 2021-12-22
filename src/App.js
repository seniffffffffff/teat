import React, { useState,useEffect } from 'react'
import TodoList from './TodoList'
import {Context} from "./context"
import Index from "./component/Footer/index";
import "./index.css"

export default  function App() {
   const [todos,setTodos] = useState([])
   const[todoTitle, setTodosTitle] = useState("")
   let [count, setCount] = useState(0)


  useEffect( () => {
    const raw = localStorage.getItem("todos") || []
    setTodos(JSON.parse(raw))
  }, [])

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }, [todoTitle])

    const addTodo = event => {
      if(event.key === "Enter"){
        setCount(count + 1)
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
      setCount(count - 1)
      setTodos(todos.filter(todo => {
        return todo.id !== id
      }))
    }


    //  let values = todos.length

    const cheaKed = event => {
        if (event.target.checked){
          setCount(count - 1)
          console.log("da")
          
        } else {
          setCount(count + 1)
          console.log("net")
          
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
            <Index count={count} />
          </div>
      </div>
      </Context.Provider>
    );
}