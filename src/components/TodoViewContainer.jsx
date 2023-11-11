import React from 'react'

export default function TodoViewContainer({todoItem}) {
  return (
    <div className='todo-card-cont'>
        <p>{todoItem.text}</p>
        <span>{todoItem.date}</span>
    </div>
  )
}
