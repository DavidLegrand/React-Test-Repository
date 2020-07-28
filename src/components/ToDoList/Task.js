import React, { useState, useCallback } from 'react'
import Confirm from './Confirm'

const Task = ({ task, remove, completed }) => {
  console.log("task rendered : ", task.id)
  const [confirm, setConfirm] = useState(false)
  const toggleConfirm = useCallback(() => {
    setConfirm(!confirm);
  }, [confirm, setConfirm])
  
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

const areEqual = (prevProps, nextProps) => {
  if (prevProps.task === nextProps.task)
    return true
  else return false
}

export default React.memo(Task, areEqual)
