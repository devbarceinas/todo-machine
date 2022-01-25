import './CreateTodoButton.css'

const CreateTodoButton = () => {
  return (
    <button 
      className='CreateTodoButton'
      onClick={() => alert('Hola')}>
      Agregar tarea
    </button>
  )
}

export { CreateTodoButton }