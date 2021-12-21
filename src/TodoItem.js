import React, {useContext} from 'react'
import { Context } from './context'

export default function TodoItem({title, id, completed}) {
  const {toggleTodo, removeTodo} = useContext(Context)

  const cls = ["todo"]

  if (completed) {
    cls.push("completed")
  }

  return (
    <li className={cls.join(" ")}>
      <div className={"todo-all"}>
        <div id="todo-text">
          <input
              className={"cheak-box"}
              type="checkbox"
              checked={completed}
              onChange={() => toggleTodo(id)}
          />
          <span>{title}</span>
        </div>
        <i
          className="material-icons red-text"
          onClick={() => removeTodo(id)}
        >
          delete
        </i>
      </div>
    </li>
  )
}