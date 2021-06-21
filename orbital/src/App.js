import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import axios from 'axios'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import PageLogin from './pages/PageLogin'
import PageSignUp from './pages/PageSignUp'
import PageApplications from './pages/PageApplications'
import PageListings from './pages/PageListings'
import PageModules from './pages/PageModules'
import PageMyModules from './pages/PageMyModules'

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

  useEffect(() => {
    axios
      .get('https://api.nusmods.com/v2/2020-2021/moduleInfo.json')
      .then(response => {
        setModules(response.data)
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
                      <PageApplications logout={logout} />
                    </Route>
                    <Route path="/listings">
                      <PageListings />
                    </Route>
                    <Route path="/modules">
                      <PageModules modules={modules} />
                    </Route>
                    {/* <Route path="/modules/">
                      <PageModulesModuleCode />
                    </Route> */}
                    <Route path="/mymodules">
                      <PageMyModules user={user} logout={logout} modules={modules} />
                    </Route>
                    <Route path="/">
                      <PageMyModules />
                    </Route>
                  </Switch>
                </Router>
              </div> :
              <div className="Student">
                <p>{user.name} logged in</p>
                <p>Access: {user.accountType}</p>
                <button id="logout" onClick={logout}>logout</button>
              </div>
            }
          </div>
        }
      </ThemeProvider>
    </div>
  )
}

export default App;
