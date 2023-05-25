// import React from 'react'
import { Link } from 'react-router-dom'
import * as userService from'../../utilities/users-service'

export default function Navbar({user, setUser}) {
  function handleHandleLogOut(){
    // delegate to the users-service
    userService.logOut()
    setUser(null)
  }
  return (
    <div>
        <nav>
            <Link to='/orders'>Order History</Link>
            &nbsp; | &nbsp;
            <Link to='/orders/new'>New Order</Link><br/>
            <span>Welcome, {user.name}</span><br/>
            <Link to='' onClick={handleHandleLogOut}>Logout</Link>
        </nav>
     
    </div>
  )
}
