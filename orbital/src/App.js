import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import axios from 'axios'
import Module from './components/Module'
import Listing from './components/Listing'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import ListingForm from './components/ListingForm'
import Togglable from './components/Togglable'
import listingService from './services/listings'
import loginService from './services/login'
import PageLogin from './pages/PageLogin'
import PageSignUp from './pages/PageSignUp'

const App = () => {
  const [user, setUser] = useState(null)

  const [errorMessage, setErrorMessage] = useState(null)

  const logout = () => {
    window.localStorage.removeItem('loggedUser')
  }




  return (
    <div className="App">
      <Notification message={errorMessage} />
      { user === null ?
        <div className="loggedOut">
          <Router>
            <Switch>
              <Route path="/SignUp">
                <PageSignUp />
              </Route>
              <Route path="/">
                <PageLogin setUser={setUser} setErrorMessage={setErrorMessage} /> 
              </Route>
            </Switch>
          </Router>
        </div> :
        <div className="loggedIn">
          <p>{user.name} logged in</p>
          <h1>My Listings</h1>
          <button id="logout" onClick={logout}>logout</button>
        </div>
      }
    </div>
  )
}

export default App;
