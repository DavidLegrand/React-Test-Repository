import React, { useState, useEffect } from 'react'
import Title from '../Title'
import NewTaskForm from './NewTaskForm'
import Select from './Select'
import List from './List'
import ToDo from '../../context/ToDo'


function ToDoList() {
  const [toDoList, setToDoList] = useState([])
  const endpoint = "https://jsonplaceholder.typicode.com/todos?userId=1"

  // Montage
  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(res => setToDoList(res))
      .catch(err => console.error(err))
  }, [endpoint])

  const [filter, setFilter] = useState("all")
  const handleFilter = (selection) => {
    setFilter(selection)
  }

  return (
    <>
      <ToDo.Provider value={{ toDoList, setToDoList, filter }}>
        <Title>To Do List</Title>
        <List />
        <Select handleFilter={handleFilter} />
        <NewTaskForm />
      </ToDo.Provider>
    </>);
}

export default ToDoList
