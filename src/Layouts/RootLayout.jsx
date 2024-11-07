import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


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
            <NavLink to='/loader'><li>Loader</li></NavLink>
        </ul>
        <button>Get Started</button>
      </nav>
      <Outlet/>
    </div>
  )
}

export default RootLayout
