import React, {useContext} from 'react'
import { Context } from './context'

export default function TodoItem({title, id, completed}) {
  const {toggleTodo, removeTodo, cheaKed} = useContext(Context)

  const cls = ["todo"]

  if (completed) {
    cls.push("completed")
  }

  let put = document.getElementById("idInput")
  put.checked = true
  console.log(put)

  return (
    <li className={cls.join(" ")}>
      <div className={"todo-all"}>
        <div id="todo-text">
          <input
              className={"cheak-box"}
              id={"idInput"}
              type="checkbox"
              checked={completed}
              onClick={cheaKed}
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