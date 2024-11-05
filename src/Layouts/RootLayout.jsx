import React from 'react'
import { NavLink } from 'react-router-dom'


const RootLayout = () => {
  return (
    <div>
      <nav>
     
      <span>  <i className="fa-solid fa-route"></i> <br />React Router</span>
        <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/about'><li>About</li></NavLink>
            <NavLink to='/features'><li>Features</li></NavLink>
            <NavLink to='/nest'><li>Nested Routes</li></NavLink>
        </ul>
        <button>Get Started</button>
      </nav>
    </div>
  )
}

export default RootLayout
