import React from 'react'
import { AppUI } from './components/AppUI/AppUI'
import { TodoProvider } from './context/TodoContext'

const App = () => {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )
}

export default App

