import React from 'react'
import TodoViewContainer from './TodoViewContainer'

export default function CompletedTodo({completedTodoList,handleDeleteTodo}) {
  return (
    <div>
      <h2>Completed Todo:</h2>
      {
        completedTodoList.map((item,index) =>(
          <TodoViewContainer 
            key={index} 
            todoItem={item}
            handleDeleteTodo={handleDeleteTodo}
            />
        ))
      }
    </div>
  )
}
