import React from 'react'
import TodoViewContainer from './TodoViewContainer';

export default function TodayTodo({todayTodoList}) {

  console.log("TodayTodo Component");
  console.log(todayTodoList);

  return (
    <div>
      <h2>Today Todos:</h2>
      
      {
        todayTodoList.map((item,index) =>(
          <TodoViewContainer 
            key={index} 
            todoItem={item}
            />
        ))
      }
    </div>
  )
}
