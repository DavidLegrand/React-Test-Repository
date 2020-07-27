import React, { useState } from 'react'
import Title from '../Title'
import Task from './Task'
import NewTaskForm from './NewTaskForm'

function ToDoList() {
  const [toDoList, setToDoList] = useState([
    { id: 1, title: "Faire les courses", completed: false },
    { id: 2, title: "Faire la vaisselle", completed: true },
    { id: 3, title: "Sortir les poubelles", completed: true },
    { id: 4, title: "Dormir", completed: false },
  ])

  const handleCompleted = (task) => {
    const newList = toDoList.map(t => {
      if (t.id === task.id) {
        t.completed = !t.completed
      }
      return t
    })
    setToDoList(newList)
  }

  const handleRemove = (task) => {
    setToDoList(toDoList.filter(t => t !== task))
  }

  const handleNewTask = (title) => {
    const newTask = { id: 0, title, completed: false }
    setToDoList([...toDoList, newTask])
  }

  return (
    <>
      <Title>To Do List</Title>
      <ul>
        <li className="task bold"><div>Terminée</div><div>Tâche</div><div>Supprimer</div></li>
        {toDoList.map((task) =>
          <Task key={task.id} task={task} remove={handleRemove} completed={handleCompleted} />
        )}</ul>
      <NewTaskForm newTask={handleNewTask} />
    </>);
}

export default ToDoList