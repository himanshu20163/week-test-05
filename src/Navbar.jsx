import React from 'react'
import './users.css';

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <h1 >Geekster</h1>
        <ul className='menu-list'>
            <li>Home</li>
            <li>About</li>
            <li>Users</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar