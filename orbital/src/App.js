import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import axios from 'axios'
import listingService from './services/listings'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import PageLogin from './pages/PageLogin'
import PageSignUp from './pages/PageSignUp'
import PageApplications from './pages/PageApplications'
import PageListingsMC from './pages/PageListingsMC'
import PageModulesMC from './pages/PageModulesMC'
import PageMyModules from './pages/PageMyModules'
import PageMyModulesStudent from './pages/PageMyModulesStudent'
import PageListingsStudent from './pages/PageListingsStudent'
import PageModulesStudent from './pages/PageModulesStudent'
import PageApply from './pages/PageApply'

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff5722",
    },
    secondary: {
      main: "#2a3eb1",
    },
    info: {
      light: "#64b5f6",
      main: "#2196f3",
      dark: "#1976d2"
    },
    success: {
      main: "#4caf50",
    },
    warning: {
      main: "#f44336",
    }
  },
  typography: {
    fontSize: 16,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

const App = () => {
  const [user, setUser] = useState(null)
  const [modules, setModules] = useState([]);
  const [listings, setListings] = useState([])
  const [listingToEdit, setListingToEdit] = useState(null)

  useEffect(() => {
    axios
      .get('https://api.nusmods.com/v2/2020-2021/moduleInfo.json')
      .then(response => {
        setModules(response.data)
      })
  }, [])

  useEffect(() => {
    listingService
      .getAll()
      .then(initialListings => {
      setListings(initialListings)
    })
  }, [])

  const logout = () => {
    window.localStorage.removeItem('loggedUser')
    window.history.pushState("login", "Log In", "/login")
    setUser(null)
  }

  return (
    <div className="App">
      <ThemeProvider theme = {customTheme}>
        { user === null ?
          <div className="loggedOut">
            <Router>
              <Switch>
                <Route path="/signup">
                  <PageSignUp />
                </Route>
                <Route path="/login">
                  <PageLogin setUser={setUser} /> 
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
                      <PageApplications user={user} logout={logout} modules={modules} listings={listings} setListings={setListings} listingToEdit={listingToEdit} setListingToEdit={setListingToEdit}/>
                    </Route>
                    <Route path="/listings">
                      <PageListingsMC user={user} logout={logout} modules={modules} listings={listings} setListings={setListings} listingToEdit={listingToEdit} setListingToEdit={setListingToEdit} />
                    </Route>
                    <Route path="/modules">
                      <PageModulesMC user={user} logout={logout} modules={modules} listings={listings} setListings={setListings} listingToEdit={listingToEdit} setListingToEdit={setListingToEdit}  />
                    </Route>
                    <Route path="/mymodules">
                      <PageMyModules user={user} logout={logout} modules={modules} listings={listings} setListings={setListings} listingToEdit={listingToEdit} setListingToEdit={setListingToEdit} />
                    </Route>
                    <Route path="/">
                      <PageMyModules user={user} logout={logout} modules={modules} listings={listings} setListings={setListings} listingToEdit={listingToEdit} setListingToEdit={setListingToEdit} />
                    </Route>
                  </Switch>
                </Router>
              </div> :
              <div className="Student">
              <Router>
                  <Switch>
                    <Route path="/apply">
                      <PageApply user={user} logout={logout} modules={modules} />
                    </Route>
                    <Route path="/listings">
                      <PageListingsStudent user={user} logout={logout} modules={modules} listings={listings} setListings={setListings} listingToEdit={listingToEdit} setListingToEdit={setListingToEdit} />
                    </Route>
                    <Route path="/modules">
                      <PageModulesStudent user={user} setUser={setUser} logout={logout} modules={modules} listings={listings} setListings={setListings} listingToEdit={listingToEdit} setListingToEdit={setListingToEdit} />
                    </Route>
                    <Route path="/mymodules">
                      <PageMyModulesStudent user={user} logout={logout} modules={modules} listings={listings} setListings={setListings} listingToEdit={listingToEdit} setListingToEdit={setListingToEdit} />
                    </Route>
                    <Route path="/">
                      <PageListingsStudent user={user} logout={logout} modules={modules} listings={listings} setListings={setListings} listingToEdit={listingToEdit} setListingToEdit={setListingToEdit} />
                    </Route>
                  </Switch>
                </Router>
              </div>
            }
          </div>
        }
      </ThemeProvider>
    </div>
  )
}

export default App;
