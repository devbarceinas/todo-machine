import React, { useContext, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';

import './TodoForm.css'

const TodoForm = ({ setOpenModal }) => {
  const [newTodoValue, setNewTodoValue] = useState('')
  const {addTodo} = useContext(TodoContext)

  const onWrite = event => {
    setNewTodoValue(event.target.value)
  }

  const onSubmit = event => {
    event.preventDefault()
    if (newTodoValue === '') return
    addTodo(newTodoValue)
    closeModal()
  }

  const closeModal = () => {
    setOpenModal(false)
  }

  return (
    <div className='form-container'>
      <a href="#" className='close-modal' onClick={closeModal}>X</a>
      <form onSubmit={onSubmit}>
        <label>Tarea</label>
        <input
          value={newTodoValue}
          onChange={onWrite}
          type='text'
          placeholder='Ingresa una nueva tarea...' 
        />
        <div className='container-buttons'>
          <button 
            className='button button-cancel'
            onClick={closeModal}>
            Cancelar
          </button>
          <button
            className='button button-add'>
            Agregar
          </button>
        </div>
      </form>
    </div>
  )
};

export { TodoForm }
