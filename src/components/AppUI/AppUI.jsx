import { Fragment, useContext } from 'react'

import { TodoCounter } from "../../components/TodoCounter"
import { TodoList } from "../../components/TodoList"
import { TodoItem } from "../../components/TodoItem"
import { CreateTodoButton } from '../../components/CreateTodoButton'
import { TodoSearch } from "../../components/TodoSearch"
import { Header } from "../../components/Header"
import { Modal } from '../../components/Modal'

import { TodoContext } from '../../context/TodoContext'

const AppUI = () => {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext)
  
  return (
    <Fragment>
      <Header/>
      <TodoCounter/>
      <div className="container-input">
        <TodoSearch />
      </div>
      <div className="container-list">
        <TodoList>
          {loading && <p>Cargando lista de tareas...</p>}
          {error && <p>¡Ocurrio un error!</p>}
          {(!loading && !searchedTodos.length) && <p>No hay tareas disponibles</p>}
          { 
            searchedTodos.map(todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))
          }
        </TodoList>
      </div>
      {!!openModal && (
        <Modal>
          <p>Hola Modal</p>
        </Modal>
      )}
      <div className="container-button">
        <CreateTodoButton 
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
      </div>
    </Fragment>
  )
}

export { AppUI }