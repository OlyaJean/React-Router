import About from "./Components/About"

import Home from "./Components/Home"
import Features from "./Components/Features"
import RootLayout from "./Layouts/RootLayout"
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from "react-router-dom"
import NestedRoutes from "./Components/NestedRoutes"
import Nest1 from "./Components/Nest1"
import Nest2 from "./Components/Nest2"
import NotFound from "./Components/NotFound"
import Loader from "./Components/Loader"
import Load, { loadFunction }  from "./Components/Load"
import Charachters, { charachterLoader } from "./Components/Charachters"
import Error from "./Components/Error"

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
       <Route index element={<Home/>}></Route>
       <Route path="about" element={<About/>}/>
    <Route path="features" element={<Features/>}/>
    <Route path="nest" element={<NestedRoutes/>}>
       <Route path='nest1' element={<Nest1/>}/>
       <Route path='nest2' element={<Nest2/>}/>
    </Route>
    <Route path="loader" element={<Loader/>} errorElement={<Error/>}>
       <Route index element={<Load/>} loader={loadFunction}/>
       <Route path=':id' element={<Charachters/>} loader={charachterLoader}/>
    </Route>
    <Route path='*' element={<NotFound/>}/>
    </Route>
  ))

  return (
   

   <div className="page">
     <RouterProvider router={router}/>
   </div>
  
  )
}

export default App
