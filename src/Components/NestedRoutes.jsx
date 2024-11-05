import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const NestedRoutes = () => {
  const navigate = useNavigate()
  return (
    <div className='nest'>
      <h1>Nested Routes</h1>
      <p>Nested Routing is the general idea of coupling segments of the URL to component hierarchy and data. React Router's nested routes were inspired by the routing system in Ember.js circa 2014. The Ember team realized that in nearly every case, segments of the URL determine: The layouts to render on the page.</p>
      <button onClick={()=>{navigate('nest1')}}>Nested Route 1</button>
      <button onClick={()=>{navigate('nest2')}}>Nested Route 2</button>
      <div className='outlet'>
      <Outlet/>
      </div>
   
      
    </div>
  )
}

export default NestedRoutes
