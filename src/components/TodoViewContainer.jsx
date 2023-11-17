import React from 'react'
import { faTrashCan, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TodoViewContainer({todoItem,handleDeleteTodo}) {
  const onDeleteTodo = (e)=>{
    // console.log("Delete Clicked", todoItem.id)
    handleDeleteTodo(todoItem.id);
  }
  return (
    <div className='todo-card-cont'>
      <div>
        <p>{todoItem.text}</p>
        <span>{todoItem.date}</span>
      </div>
      <div className="action-btn-cont">
        <FontAwesomeIcon icon={faCircleCheck} />
        <FontAwesomeIcon icon={faTrashCan} onClick={onDeleteTodo}/>
      </div>
    </div>
  )
}
