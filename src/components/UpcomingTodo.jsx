import React from 'react'
import TodoViewContainer from './TodoViewContainer';

export default function UpcomingTodo({upcomingTodoList}) {
  console.log("UpcomingTodo Component");
  console.log(upcomingTodoList);
  return (
    <div>
      <h2>Upcoming Todo:</h2>
      {
        upcomingTodoList.map((item,index) =>(
          <TodoViewContainer 
            key={index} 
            todoItem={item}
            />
        ))
      }
    </div>
  )
}
