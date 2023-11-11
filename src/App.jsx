import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Sidebar from './components/sidebar'
import MainContainer from './components/MainContainer'


function App() {

  const [sidebarItemSlug, setSidebarItemSlug] = useState("")
  const [todoList,setTodoList] = useState([])

  useEffect(()=>{
    const fetchData = async ()=>{
      try{

        const result = await axios("././data.js")
        console.log("Fetched data: App.js")
        console.log(result.data);
        setTodoList(result.data)
      }catch(err){
        console.error("Error Details: ",err)
      }
    }
    fetchData()
  },[])

  const handleCreateNewTodo = (formData)=>{
    console.log("App Container: "+formData.text+" "+formData.date)

    setTodoList(state=>(
      [...state,formData]
    ))
  }

  return (
    <>
      <div className="root-cont">
        <Sidebar updateSlugState = {(slug)=>setSidebarItemSlug(slug)}/>
        <MainContainer sidebarItemSlug={sidebarItemSlug} list={todoList} onCreateNewTodo={handleCreateNewTodo} />
      </div>
    </>
  )
}

export default App
