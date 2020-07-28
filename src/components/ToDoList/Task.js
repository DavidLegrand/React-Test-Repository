import React, { useState } from 'react'
import Confirm from './Confirm'

const Task = ({ task, remove, completed }) => {
  const [confirm, setConfirm] = useState(false)
  const toggleConfirm = () => {
    setConfirm(!confirm);
  }

  return (
    <li className="task">
      <div><input type="checkbox" checked={task.completed} onChange={() => { completed(task) }} /></div>
      <div className={task.completed ? "completed" : ""}>{task.title}</div>
      <div><button onClick={() => toggleConfirm()} className="delete" >x</button></div>
      {confirm &&
        (<Confirm remove={remove} task={task} toggle={toggleConfirm} />)}
    </li>
  )
}

export default Task
