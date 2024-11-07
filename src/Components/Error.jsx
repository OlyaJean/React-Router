import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
  return (
    <div>
        <h1>An error occurred.</h1>
        <br />
      <h3>{error.message}</h3>
    </div>
  )
}

export default Error
