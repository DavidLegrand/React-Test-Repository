import React from 'react'

const Select = (props) => {
  const handleChange = (e) => {
    props.handleFilter(e.target.value)
  }

  return (
    <div>
      Filtrer les tâches :
      <select onChange={handleChange}>
        <option value="all">Toutes</option>
        <option value="false">En cours</option>
        <option value="true">Terminées</option>
      </select>
    </div>
  )
}

export default Select