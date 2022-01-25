import './CreateTodoButton.css'

const CreateTodoButton = ({ setOpenModal, openModal: modal }) => {

  const openModal = () => {
    setOpenModal(!modal)
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