import React, { useState } from 'react'

const NewTaskForm = ({ newTask }) => {
  const [taskName, setTaskName] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault();
    newTask(taskName);
    setTaskName("");
  }

  return (
    <div className="newTask">
      <form onSubmit={handleSubmit}>
        <div><input
          type="text" placeholder="Nouvelle tâche..."
          value={taskName}
          onChange={(e) => { setTaskName(e.target.value) }}
        /></div>
        <div><button type="submit">+</button></div>
      </form>
    </div>
  )
}

export default NewTaskForm
