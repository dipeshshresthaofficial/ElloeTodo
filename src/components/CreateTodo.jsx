import React, { useState,useRef } from 'react'
import {v4 as uuidv4} from 'uuid'
import moment from 'moment'

export default function CreateTodo({onCreateNewTodo}) {

  const [formKey, setFormKey] = useState(0);

  const formRef = useRef(null)

  const handleFormSubmit = (e)=>{
    e.preventDefault()
    const newTodoData={
      "id":"",
      "text":"",
      "date":0,
      "status": "pending"
    }
    const todoContent = document.getElementById("todo-content")
    const todoDate = document.getElementById("todo-date")
    // const formattedDate = moment(todoDate.value,"YYYY-MM-DD").format("MM/DD/YYYY")
    const id = crypto.randomUUID()
    // console.log("jskldfjlkslkj"+typeof(id))

    newTodoData.text = todoContent.value
    newTodoData.date = todoDate.value
    newTodoData.id = id

     // Reset the form after submission
     if (formRef.current) {
      formRef.current.reset();
    }
    onCreateNewTodo(newTodoData)

  }

  return (
    <div className="create-todo-form-cont">
        <form method="POST" ref={formRef} onSubmit={handleFormSubmit}>
            <input type="text" id="todo-content" name="content" required/>
            <input type="date" id="todo-date" name="dueDate" min={new Date().toJSON().slice(0, 10)} required/>
            <button>Submit</button>
        </form>
    </div>
  )
}
