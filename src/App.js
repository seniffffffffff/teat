import React, {useState, useEffect, useMemo} from 'react'
import Footer from "./component/Footer";
import "./index.css"
import TodoItem from "./TodoItem";

export default function App() {
    const [todos, setTodos] = useState([])
    const [todoTitle, setTodosTitle] = useState("")
    let [count, setCount] = useState(0);

    let [filters, setFilters] = useState(0)


    useEffect(() => {
        const raw = localStorage.getItem("todos") || []
        setTodos(JSON.parse(raw))
    }, [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todoTitle])

    const addTodo = event => {
        if (event.key === "Enter") {
            setCount(count + 1)
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    title: todoTitle,
                    completed: false
                }
            ])
            setTodosTitle("")
        }
    }

    function removeTodo(id) {
        setCount(count - 1)
        setTodos(todos.filter(todo => {
            return todo.id !== id
        }))
    }

    const allTodo = () => {
        setFilters(0)
    }

    const findTodo = () => {
        setFilters(1)
    }

    const findComplited = () => {
        setFilters(2)
    }

    const taskLeft = useMemo(() => {
        return todos.filter(item => item.completed !== true).length
    }, [todos])

    const selectAllTodo = () => {
        setTodos(todos.filter(elem => elem.completed === false ? elem.completed = true : elem))
    }

    const deleteAll = () => {
        setTodos(todos.filter(elem => elem.completed === true ? null : elem))
    }

    const toggleTodo = id => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    const filteredTask = useMemo(() => {
        switch (filters) {
            case 0 :
                return todos
            case 1 :
                return todos.filter(item => !item.completed)
            case 2 :
                return todos.filter(item => item.completed)
        }
    }, [todos, filters])

    return (

        <div className="container">
            <h1 className='title'>Your todo list</h1>
            <div className="input-field">
                <input
                    className={"input-text"}
                    type="text"
                    value={todoTitle}
                    onChange={event => setTodosTitle(event.target.value)}
                    onKeyPress={addTodo}
                    placeholder='Enter your task here'
                />
                <ul>
                    {filteredTask.map(item =>
                        <TodoItem
                            {...item}
                            key={item.id}
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                        />)}
                </ul>
                {
                    todos.length > 0 &&
                    <Footer
                        isShowButton={!!todos.filter(item => item.completed).length}
                        count={taskLeft}
                        todos={todos}
                        filters={filters}
                        selectAllTodo={selectAllTodo}
                        allTodo={allTodo}
                        findTodo={findTodo}
                        findComplited={findComplited}
                        deleteAll={deleteAll}
                    />
                }
            </div>
        </div>
    );
}