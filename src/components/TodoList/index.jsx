 const TodoList = ({children}) => {
  return (
    <section  className="container-list">
      <ul>
        {children}
      </ul>
    </section>
  )
 }

 export { TodoList }