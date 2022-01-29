import './CreateTodoButton.css'

const CreateTodoButton = ({ setOpenModal }) => {

  const openModal = () => {
    // usar funciones en el state nos devuelve el state anterior a nuestro actualización
    // setOpenModal(prevState => !prevState)
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