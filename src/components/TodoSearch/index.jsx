import { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'
import './TodoSearch.css'

const TodoSearch = () => {
  const {search, setSearch} = useContext(TodoContext)

  const onSearchValueChange = event => {
    const { value } = event.target
    setSearch(value)
  } 

  return (
    <>
      <input
        type="text"
        className='TodoSearch' 
        placeholder="Crea una nueva tarea :D"
        name="name"
        value={search}
        onChange={onSearchValueChange}
      />
    </>
  )
}

export { TodoSearch }