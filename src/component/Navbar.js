import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({isClick}) => {


   
  
  return (
    <nav className='navbar-grid'>
        <img src='public/ERA-logo.png'/>
        <div className='navbar-item-grid'>
          <Link to="/">Dashboard</Link>
          <Link to="/create">Create New </Link>
          <Link to="/change">Incidents</Link>
          <Link to="/risk">Estate Risk</Link>
        </div>
    </nav>
  )
}

export default Navbar