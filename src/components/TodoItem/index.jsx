import { BsTrash, BsFillHandThumbsUpFill, BsClockFill } from "react-icons/bs";

import './TodoItem.css'

const TodoItem = (props) => {

  return (
    <>
      <li>
        <p className={`${props.completed && 'completed-task'}`}>{props.text}</p>
        <div className='container-end'>
          {
            props.completed
            ? <BsFillHandThumbsUpFill onClick={props.onComplete} className="completed space-icon"/>
            : <BsClockFill onClick={props.onComplete} className="completed space-icon"/>
          }
          <BsTrash className='completed' onClick={props.onDelete} />
        </div>
      </li>
    </>
  )
}

export { TodoItem }