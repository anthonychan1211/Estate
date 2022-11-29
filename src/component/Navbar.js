import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({isClick}) => {

    function handleClick(e){
        isClick = e.target.innerText
    }

  return (
    <nav className='navbar-grid'>
        <h1>[LOGO]</h1>
        <div className='navbar-item-grid'>
          <Link to="/">Dashboard</Link>
          <Link to="/create">Create New</Link>
          <Link to="/change">Incidents</Link>
          <Link to="/risk">Estate Risk</Link>
        </div>
    </nav>
  )
}

export default Navbar