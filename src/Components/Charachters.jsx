import React from 'react'
import { useLoaderData } from 'react-router-dom'


const Charachters = () => {

   
        const charDetails = useLoaderData()
    
 
  return (
    <div>
      <h1>Charachters' details</h1>
      <p>Name: {charDetails.name}</p>
      <p>Position: {charDetails.occupation}</p>
    </div>
  )
}

export default Charachters
export const charachterLoader = async({params}) =>{
    const {id} = params;
    const res = await fetch("http://localhost:5000/roles/" + id)
    if(!res.ok){
        throw Error("No information found")
    }
    return res.json()
}