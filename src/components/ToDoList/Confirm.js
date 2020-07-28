import React from 'react'

const Confirm = (props) => {
  return (
    <div className="confirm">
      <p>Voulez-vous vraiment supprimer cette tâche ?</p>
      <div><button onClick={() => props.remove(props.task)}>Confirmer</button></div>
      <div><button onClick={() => props.toggle()}>Annuler</button></div>
    </div>
  )
}

export default Confirm