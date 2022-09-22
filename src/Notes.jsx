import React from 'react'
import { FiTrash2 } from 'react-icons/fi'

const Notes = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id)
  }
  return (
    <div className="note">
        <h1> {props.title} </h1>
        <p> {props.content} </p>
        <button onClick={deleteNote}> 
           <FiTrash2 className='delete'/>
        </button>
    </div>
  );
}

export default Notes;