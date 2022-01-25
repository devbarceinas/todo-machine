import './CreateTodoButton.css'

const CreateTodoButton = ({ setOpenModal }) => {

  const openModal = () => {
    setOpenModal(true)
  }

  return (
    <button 
      className='CreateTodoButton'
      onClick={openModal}>
      Agregar tarea
    </button>
  )
}

export { CreateTodoButton }