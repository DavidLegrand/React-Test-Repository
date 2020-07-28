import React, { useState } from 'react'
import useFetch from '../../hooks'
import Title from '../Title'
import NewTaskForm from './NewTaskForm'
import SelectFilter from './SelectFilter'
import List from './List'
import ToDo from '../../context/ToDo'
import Filter from '../../context/Filter'


function ToDoList() {
  const [toDoList, setToDoList] = useState([])
  const [filter, setFilter] = useState("all")

  const endpoint = "https://jsonplaceholder.typicode.com/todos?userId=1"
  useFetch(endpoint, setToDoList);


  return (
    <>
      <Title>To Do List</Title>
      <ToDo.Provider value={{ toDoList, setToDoList }}>
        <Filter.Provider value={{ filter, setFilter }}>
          <List />
          <SelectFilter />
        </Filter.Provider>
        <NewTaskForm />
      </ToDo.Provider>
    </>);
}

export default React.memo(ToDoList)
