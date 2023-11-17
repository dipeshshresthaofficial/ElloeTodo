import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import './App.css'
import Sidebar from './components/sidebar'
import MainContainer from './components/MainContainer'


function App() {

  const [sidebarItemSlug, setSidebarItemSlug] = useState("")
  const [todoList,setTodoList] = useState([])

  useEffect(()=>{
    const fetchData = async ()=>{
      try{

        axios("http://localhost:80/elloe-todo/todos").then(result=>{
          console.log("Fetched data: App.js")
          result.data.map(item=>{
            
            const formattedDate = moment(item.date,"YYYY-MM-DD").format("MM/DD/YYYY")
            item.date = formattedDate
            return item
          })
          setTodoList(result.data)
        })
      }catch(err){
        console.error("Error Details: ",err)
      }
    }
    fetchData()
  },[])

  async function updateDB(formData){
    
    await axios.post("http://localhost:80/elloe-todo/todo/create",formData)


    // Updating state
    const newList = [...todoList,formData]
    setTodoList(newList)

  }

  async function handleCreateNewTodo (formData){
    try{
      // updating database
      await updateDB(formData)
    }catch(err){
      console.log("Error updaing Database: ",err)
    }
  }

  async function handleDeleteTodo(todoId){
    // alert(todoId)
    if(todoId != null){
      await axios.delete(`http://localhost:80/elloe-todo/todo/${todoId}/delete`).then(res=>{
        console.log(res.data);
        // updating the local state as well
        const newList = todoList.filter(item=> item.id != todoId);
        setTodoList(newList)
      })
    }
  }

  return (
    <>
      <div className="root-cont">
        <Sidebar updateSlugState = {(slug)=>setSidebarItemSlug(slug)}/>
        <MainContainer sidebarItemSlug={sidebarItemSlug} list={todoList} onCreateNewTodo={handleCreateNewTodo} handleDeleteTodo={handleDeleteTodo}/>
      </div>
    </>
  )
}

export default App
