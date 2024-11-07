import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
const Load = () => {
    const loadData = useLoaderData()
  return (
    <div className='friendsList'>
         {loadData.map((data) => {return <Link to={data.id.toString()} key={data.id}><p>{data.name} </p></Link> 
         })}
    </div>
  )
}

export default Load
export const loadFunction = async() => {
    const response = await fetch("http://localhost:5000/roles");
  
      return response.json()
   
   
}
