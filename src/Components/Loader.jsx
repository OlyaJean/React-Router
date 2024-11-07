import React from 'react'
import { Outlet } from 'react-router-dom'


const Loader = () => {
   
  return (
    <div>
      <p>In React Router, a loader is a function associated with a specific route that fetches data before the corresponding route component renders. This allows you to preload data, improving the user experience by displaying content faster and avoiding unnecessary loading states.</p>
      <br /><br />
   <h3>Example of fetching data from JSON server</h3>
   <br />
   <h5>"Friends" tv-show charachters</h5>
   <div className='outlet'>  <Outlet/></div>
 
    </div>
  )
}

export default Loader
