import React from 'react'

const Product = () => {
  return (
    <div>
      <h1>Key features of React Router:</h1>

      <p>Client-side routing:
Unlike traditional websites where navigation triggers full page reloads, React Router handles routing within the client-side application, leading to faster and more dynamic user experiences. <br /> <br />
Declarative syntax:
React Router uses a declarative approach to define routes, making your code more readable and maintainable.<br /> <br />
Multiple route types:
It supports various route types, including:
Basic routes: Maps URLs to specific components.
Nested routes: Creates a hierarchical structure of routes, ideal for complex applications.
Dynamic routes: Defines routes with parameters, allowing you to extract values from the URL.
Index routes: Sets the default route for a given path.<br /> <br />
Navigation components:
Provides components like Link and NavLink for creating navigation links, as well as the Navigate component for programmatic navigation.<br /> <br />
Browser history management:
Integrates with the browser's history API, enabling users to use browser features like the back and forward buttons.<br /> <br />
Server-side rendering support:
Can be used with server-side rendering (SSR) frameworks like Next.js for improved SEO and initial page load performance.</p>
    </div>
  )
}

export default Product
