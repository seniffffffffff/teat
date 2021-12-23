import React, { useState,useEffect } from 'react'
import TodoList from './TodoList'
import {Context} from "./context"
import Index from "./component/Footer/index";
import ToDO from "./component/ToDO";
import "./index.css"
import TodoItem from "./TodoItem";

export default  function App({}) {
   const [todos,setTodos] = useState([])
   const[todoTitle, setTodosTitle] = useState("")
   let [count, setCount] = useState(0)

   let newTodos = JSON.parse(JSON.stringify(todos))

  useEffect( () => {
    const raw = localStorage.getItem("todos") || []
    setTodos(JSON.parse(raw))
  }, [])

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }, [todoTitle])

  let div = document.getElementById("footer")


    const addTodo = event => {
      if(event.key === "Enter"){
        div.className = "footer"
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

    let findTo = newTodos.filter(elem => elem.completed === false)
    let compTo = newTodos.filter(elem => elem.completed === true)

    const allTodo = (event) => {
      setTodos([
          ...todos
      ])
    }
  console.log(newTodos)
    const findTodo = (event) => {
      setTodos([
        ...findTo
      ])
    }

    const findComplited = (event) => {
      setTodos([
        ...compTo
      ])
    }

    const cheaKed = event => {
        if (event.target.checked){
          setCount(count - 1)
        } else {
          setCount(count + 1)
        }
    }

    const selectAllTodo = event => {

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
        toggleTodo, removeTodo , cheaKed, findTodo, allTodo, findComplited, selectAllTodo
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