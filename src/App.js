import React, { useState,useEffect , useMemo} from 'react'
import TodoList from './TodoList'
import {Context} from "./context"
import Index from "./component/Footer/index";
import ToDO from "./component/ToDO";
import "./index.css"
import TodoItem from "./TodoItem";

export default  function App({}) {
   const [todos,setTodos] = useState([])
   const[todoTitle, setTodosTitle] = useState("")
   let [count, setCount] = useState(0);

   let [filters, setFilters] = useState(0)

   let newTodos = JSON.parse(JSON.stringify(todos))

  useEffect( () => {
    const raw = localStorage.getItem("todos") || []
    setTodos(JSON.parse(raw))
  }, [])

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }, [todoTitle])

  let div = document.getElementById("footer")
  let clearButton = document.getElementById("but")


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

    const allTodo = (event) => {
      setFilters(0)
    }

    const findTodo = (event) => {
      setFilters(filters = 1)
    }

    const findComplited = (event) => {
      setFilters(filters = 2)
    }

    const taskLeft = useMemo(() => {
       return todos.filter(item => item.completed !== true ).length
    }, [todos])

  const selectAllTodo = () => {
setTodos(todos.filter(elem => elem.completed === false ? elem.completed = true : elem))
  }

  const deleteAll = () => {
    setTodos(todos.filter(elem => elem.completed === true ? null : elem))
    clearButton.style.zIndex = "-2"
  }

    const toggleTodo = id => {
      setTodos(todos.map(todo => {
        if(todo.id === id){
          clearButton.style.zIndex = "0"
          todo.completed = !todo.completed
        }
        return todo
      }))
    }

    const filteredTask  = useMemo(() => {
     switch (filters) {
       case 0 : return todos
       case 1 : return todos.filter(item => item.completed !== true )
       case 2 : return todos.filter(item => item.completed !== false)
       //case 3 : return todos.filter(elem => elem.completed === false ? elem.completed = true : elem)

     }
    }, [todos, filters])


  return (
      <Context.Provider value={{
        toggleTodo, removeTodo , taskLeft, selectAllTodo, findTodo, allTodo, findComplited,deleteAll
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
            <TodoList todos={filteredTask} />
            <Index count={taskLeft} filters={filters} />
          </div>
      </div>
      </Context.Provider>
    );
}