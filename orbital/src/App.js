import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PageLogin from './pages/PageLogin'
import PageSignUp from './pages/PageSignUp'
import PageProf from './pages/PageProf'
import PageApplications from './pages/PageApplications'
import PageListings from './pages/PageListings'
import PageModules from './pages/PageModules'
import PageMyModules from './pages/PageMyModules'

const App = () => {
  const [user, setUser] = useState(null)


  const logout = () => {
    window.localStorage.removeItem('loggedUser')
    window.history.pushState("SignUp", "SignUp", "/")
  }


  console.log(user)

  return (
    <div className="App">
      { user === null ?
        <div className="loggedOut">
          <Router>
            <Switch>
              <Route path="/signup">
                <PageSignUp />
              </Route>
              <Route path="/">
                <PageLogin setUser={setUser} /> 
              </Route>
            </Switch>
          </Router>
        </div> :
        <div className="loggedIn">
          {user.accountType === "Module Coordinator" ? 
            <div className="ModuleCoordinator">
            <Router>
              <Switch>
                <Route path="/applications">
                  <PageApplications />
                </Route>
                <Route path="/listings">
                  <PageListings />
                </Route>
                <Route path="/modules">
                  <PageModules />
                </Route>
                {/* <Route path="/modules/">
                  <PageModulesModuleCode />
                </Route> */}
                <Route path="/mymodules">
                  <PageMyModules />
                </Route>
                <Route path="/">
                  <PageMyModules />
                </Route>
              </Switch>
            </Router>
              {/* <p>{user.name} logged in</p>
              <p>Access: {user.accountType}</p>
              <button id="logout" onClick={logout}>logout</button> */}
            </div> :
            <div className="Student">
              <p>{user.name} logged in</p>
              <p>Access: {user.accountType}</p>
              <button id="logout" onClick={logout}>logout</button>
            </div>
          }
        </div>
      }
    </div>
  )
}

export default App;
