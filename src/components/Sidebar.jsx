import React from 'react'
import { faBarsProgress, faCalendarWeek, faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import './../styles/sidebar.css'
import SidebarItem from './SidebarItem'

const sidebarOptionLists = [
  {
    "img":faBarsProgress,
    "name": "Upcoming",
    "slug": "upcoming-todo"
  },
  {
    "img":faCalendarWeek,
    "name":"Today",
    "slug":"today-todo"
  },
  {
    "img":faCheckDouble,
    "name":"Completed",
    "slug":"completed-todo"
  }
]

export default function Sidebar({updateSlugState}) {

  // Function to update the slug state in App Component
  const handleItemClick = (slug)=>{
    console.log("Inside Sidebar Fun"+slug);
    updateSlugState(slug);
  }
  
  return (
    <div className='sidebar-cont'>
      {sidebarOptionLists.map((item,index)=>(
        <SidebarItem 
          item={item} 
          key={index}
          onSidebarItemClick={handleItemClick} 
          />
      )
      )}
    </div>
  )
}
