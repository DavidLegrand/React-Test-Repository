import React, { useContext, useCallback } from 'react'
import Task from './Task'
import ToDo from '../../context/ToDo'
import Filter from '../../context/Filter'

const List = () => {

  const { toDoList, setToDoList } = useContext(ToDo)
  const { filter } = useContext(Filter)

  const handleRemove = useCallback((task) => {
    setToDoList(toDoList.filter(t => t !== task))
  }, [toDoList, setToDoList])

  const handleCompleted = useCallback((task) => {
    const newList = toDoList.map(t => {
      if (t.id === task.id) {
        t.completed = !t.completed
      }
      return t
    })
    setToDoList(newList)
  }, [toDoList, setToDoList])

  return (
    <ul>
      <li className="task bold">
        <div>Terminée</div><div>Tâche</div><div>Supprimer</div>
      </li>
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
