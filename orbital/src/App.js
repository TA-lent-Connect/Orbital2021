import React from 'react'
import PageLogin from "./pages/PageLogin"
import {isAdmin} from "./pages/PageLogin"
import PageHome from "./pages/PageHome"

const App = () => (
  <div> 
   {isAdmin ? <PageHome></PageHome> : <PageLogin></PageLogin>}
  </div>
)

export default App
