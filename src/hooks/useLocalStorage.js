import { useState, useEffect

} from 'react'

const useLocalStorage = (typeItem, initialValue) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [item, setItem] = useState(initialValue)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageTodos = localStorage.getItem(typeItem)
        let parseItem;

        if (!localStorageTodos) { // validamos si el localStorare está vacio
          localStorage.setItem(typeItem, JSON.stringify(initialValue))
          parseItem = initialValue
        } else {
          parseItem = JSON.parse(localStorageTodos) // Encaso de tener datos parseamos el contenido a formato JSON
        }

        setItem(parseItem)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }, 2000);
  })

  const saveItem = newLocalTodos => {
    const stringifyTodos = JSON.stringify(newLocalTodos)
    localStorage.setItem(typeItem, stringifyTodos)
    setItem(newLocalTodos)
  }

  return {
    item,
    saveItem,
    loading,
    error,
  }
}

export { useLocalStorage }