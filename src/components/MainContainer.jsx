import React, { useEffect, useState } from 'react'
import moment from 'moment'

import UpcomingTodo from './UpcomingTodo'
import TodayTodo from './TodayTodo'
import CompletedTodo from './CompletedTodo'
import CreateTodo from './CreateTodo'
import OutdatedTodo from './OutdatedTodo'

import "./../styles/mainContainer.css"

export default function MainContainer({sidebarItemSlug, list, onCreateNewTodo, handleDeleteTodo}) {
  const [isFormOpen,setIsFormOpen] = useState(false)
  const [todayTodo,setTodayTodo] = useState([])
  const [upcomingTodo,setUpcomingTodo] = useState([])
  const [outdatedTodo,setOutdatedTodo] = useState([])
  const [completedTodo,setCompletedTodo] = useState([])
  // console.log("MainContai

  useEffect(()=>{
    function distributeTodos(){

      // Creating these local list inorder avoid setting the state directly because the state are asynchronous and setting them inside a loop will not guarantee that the state will be updated correctly.
      const todayTodoList = []
      const upcomingTodoList = []
      const completedTodoList = []
      const outdatedTodoList = []

      list.map(item =>{
        let [todoMonth,todoDay,todoYear] = item.date.split('/')
        const currentDate = new Date();
        // console.log(Number(todoDay)+"**"+currentDate.getDate()+" = ")
        // console.log(Number(todoDay)<currentDate.getDate())

        if(item.status=="pending" && todoDay == currentDate.getDate() && todoMonth == (currentDate.getMonth()+1) && todoYear == currentDate.getFullYear()){
          todayTodoList.push(item)
        } else if(item.status == "completed"){
          completedTodoList.push(item)
        } else if(item.status=="pending" && Number(todoDay) < currentDate.getDate() && Number(todoMonth) <= (currentDate.getMonth()+1) && Number(todoYear) <= currentDate.getFullYear()){
          outdatedTodoList.push(item)
        }else{
          upcomingTodoList.push(item)
        }
      })
      setTodayTodo(todayTodoList);
      setCompletedTodo(completedTodoList);
      setOutdatedTodo(outdatedTodoList)
      setUpcomingTodo(upcomingTodoList);
    }
    distributeTodos()
  },[list])

  const handleCreateTodoBtn = e=>{
    const createTodoFormContainerRef = document.querySelector(".create-todo-form-cont");
    const newTodoBtnRef = document.querySelector(".create-todo-btn");

    if(!isFormOpen){

      createTodoFormContainerRef.style.display = "block";
      newTodoBtnRef.innerText = "Cancel"
      setIsFormOpen(!isFormOpen)

    }else{

      createTodoFormContainerRef.style.display = "none";
      newTodoBtnRef.innerText = "New Todo"
      setIsFormOpen(!isFormOpen)

    }
  }

  return (
    <div className="main-cont">
      <div className="create-todo-cont">
        <button className="create-todo-btn" onClick={handleCreateTodoBtn}>Create Todo</button>
        <CreateTodo onCreateNewTodo={onCreateNewTodo} />
      </div>
      <div>
      </div>
        {
          sidebarItemSlug == "today-todo" 
            ? <TodayTodo todayTodoList={todayTodo} handleDeleteTodo={handleDeleteTodo}/> 
            : sidebarItemSlug == "upcoming-todo" 
              ? <UpcomingTodo upcomingTodoList = {upcomingTodo} handleDeleteTodo={handleDeleteTodo}/> 
              : sidebarItemSlug == "pending-todo"
                ? <OutdatedTodo outdatedTodoList = {outdatedTodo} handleDeleteTodo={handleDeleteTodo}/>
                : <CompletedTodo completedTodoList = {completedTodo}/>
        }
    </div>
  )
}
