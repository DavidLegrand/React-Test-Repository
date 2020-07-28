import React, { useContext } from 'react'
import Task from './Task'
import ToDo from '../../context/ToDo'

const List = () => {
  
  const { toDoList, filter, setToDoList } = useContext(ToDo)
  
  const handleRemove = (task) => {
    setToDoList(toDoList.filter(t => t !== task))
  }

  const handleCompleted = (task) => {
    const newList = toDoList.map(t => {
      if (t.id === task.id) {
        t.completed = !t.completed
      }
      return t
    })
    setToDoList(newList)
  }

  return (
    <ul>
      <li className="task bold"><div>Terminée</div><div>Tâche</div><div>Supprimer</div></li>
      {toDoList
        .filter(task => filter === "all" ? true : task.completed === (filter === "true"))
        .map(task =>
          <Task key={task.id} task={task} remove={handleRemove} completed={handleCompleted} />
        )
      }
    </ul>
  )
}

export default List
