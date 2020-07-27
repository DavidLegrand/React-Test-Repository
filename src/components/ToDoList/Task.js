import React from 'react'

const Task = ({ task, remove, completed }) => {
  return (
    <li className="task">
      <div><input type="checkbox" checked={task.completed} onChange={() => { completed(task) }} /></div>
      <div className={task.completed ? "completed" : ""}>{task.title}</div>
      <div><button onClick={() => { remove(task) }}>x</button></div>
    </li>
  )
}

export default Task
