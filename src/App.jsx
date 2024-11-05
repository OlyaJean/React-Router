import About from "./Components/About"

import Home from "./Components/Home"
import Features from "./Components/Features"
import RootLayout from "./Layouts/RootLayout"
import { Route,Routes } from "react-router-dom"
import NestedRoutes from "./Components/NestedRoutes"
import Nest1 from "./Components/Nest1"
import Nest2 from "./Components/Nest2"
import NotFound from "./Components/NotFound"

function App() {
  

  return (
    <>
   <RootLayout/>
   <div className="page">
   <Routes>
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/features" element={<Features/>}></Route>
      <Route path="/nest" element={<NestedRoutes/>}>
         <Route path='nest1' element={<Nest1/>}/>
         <Route path='nest2' element={<Nest2/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
   </Routes>
   </div>
    </>
  )
}

export default App
