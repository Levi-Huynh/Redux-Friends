import React from "react";
import { NavLink } from 'react-router-dom'

export default props => {
  return (
   
      <div className='navbar'>
        <ul>
          <li>
            <NavLink exact activeClassName="activeNavButton" to='/protected'><button>Friend List</button></NavLink>
            <NavLink exact activeClassName="activeNavButton" to='/friendForm'><button>Add a Friend Form</button></NavLink>
            <NavLink exact activeClassName="activeNavButton" to='/UpdateFriendForm'><button>Edit/ Delete Friend Form</button></NavLink>
          </li>
        </ul>
      </div>
   
  )
}

