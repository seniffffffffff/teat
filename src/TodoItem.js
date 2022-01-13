import React from "react"


export default function TodoItem({title, id, completed, toggleTodo, removeTodo}) {

  const cls = ["todo"]

  if (completed) {
    cls.push("completed")
  }

  return (
    <li className={cls.join(" ")}>
      <div className={"todo-all"}>
        <div id="todo-text">
          <div className="div-label">
            <input
                className={"cheak-box"}
                id={id}
                name={"boxes"}
                type="checkbox"
                value={completed}
                checked={completed}
                onChange={() => {toggleTodo(id)}}
            />
            <label htmlFor={id}/>
          </div>
          <span>{title}</span>
        </div>
        <i
          className="material-icons red-text gray"
          onClick={() => removeTodo(id)}
        >
          delete
        </i>
      </div>
    </li>
  )
}