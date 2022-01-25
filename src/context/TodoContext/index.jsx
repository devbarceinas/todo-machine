import React, { createContext } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'

const TodoContext = createContext()

const TodoProvider = ({ children }) => {
  const {
    item: todos, 
    saveItem, 
    loading,
    error
  } = useLocalStorage('TODOS_V1', [])
  const [search, setSearch] = React.useState('')

  // Contar cuantos todos tedos
  // ! valida si la variable que estamos verificando es falso
  // !! valida si la variable que estamos verificando es true
  const completedTodos = todos.filter(todo => !!todo.completed).length // regresa un array nuevo cada que un todo es terminado
  const totalTodos = todos.length // muestra los todos en total

  // Buscador de todos
  let searchedTodos = []

  if (!search.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = search.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  // Complete todos
  const completeTodo = text => {
    /**
     * El método findIndex() devuelve el índice del primer elemento 
     * de un array que cumpla con la función de prueba proporcionada. 
     * En caso contrario devuelve -1.
     */
    const todoIndex = todos.findIndex(todo => todo.text === text) // Nos devuelve el indice de los todos dependiendo de la condición
    const newTodo = [...todos] // cada vez que quieramos mutar un array a que hacer un copia de el para poder modificarlo
    newTodo[todoIndex].completed = true // accedemos al indice de la copia de todos y modificamos la propiedad del objetos hallamos accedido
    saveItem(newTodo) // modifcamos el array con la nueva copia y se atualiza el estado
  }

  // Delete todo
  const deleteTodo = text => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodo = [...todos]
    newTodo.splice(todoIndex, 1)
    saveItem(newTodo)
  }

  const data = {
    loading,
    error,
    totalTodos,
    completedTodos,
    search,
    setSearch,
    todos,
    searchedTodos,
    completeTodo,
    deleteTodo,
  }

  return (
    <TodoContext.Provider value={data}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }