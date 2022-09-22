import React, { useState } from 'react'
import { BsPlus } from 'react-icons/bs'

const CreateNote = (props) => {
  const [note, setNote] = useState({
      title: '',
      content: '',
    }) 

  const InputEvent = (event) => {
    const {name, value} = event.target 
      setNote((prevData) => {
        return {
          ...prevData, 
          [name]: value,
        }
    })
  }

  const addEvent = () => {
      props.passNote(note)
      setNote({
      title: '',
      content: '',
    }) 
  }

  const submit = (e) => {
      e.preventDefault()
  }

  return (
    <>
    <div className="main-note">
    <form onSubmit={submit}>
        <input type='text' 
               name='title' 
               value={note.title} 
               onChange={InputEvent} 
               placeholder='Title'  
               autoComplete='off'
        /> 
        <textarea rows='' 
                  columns='' 
                  name='content' 
                  value={note.content} 
                  onChange={InputEvent} 
                  placeholder='Write a note...' 
        ></textarea>
        <button className='btn' onClick={addEvent}>
          <BsPlus className='plus' />
        </button>
    </form>
    </div>
    </>
  );
}

export default CreateNote