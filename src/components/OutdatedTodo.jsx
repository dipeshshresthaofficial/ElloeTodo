import React from 'react'
import TodoViewContainer from './TodoViewContainer'

export default function OutdatedTodo({outdatedTodoList, handleDeleteTodo}) {
  return (
    <div>
      <h2>Outdated Todo:</h2>
      {
        outdatedTodoList.map((item,index)=>(
          <TodoViewContainer key={index} todoItem={item} handleDeleteTodo={handleDeleteTodo}/>
        ))
      }
    </div>
  )
}
