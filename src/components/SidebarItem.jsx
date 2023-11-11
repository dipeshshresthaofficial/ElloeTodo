import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function SidebarItem({item, onSidebarItemClick}) {

  const handleSidebarItemClick = e=>{
    onSidebarItemClick(item.slug)
  }

  return (
    <div className="sidebar-item" onClick={handleSidebarItemClick}>
        <FontAwesomeIcon icon={item.img}/>
        <p>{item.name}</p>
    </div>
  )
}
