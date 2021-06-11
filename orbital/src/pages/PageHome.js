import React, { useState, useEffect, useRef } from 'react'
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

const App = () => {
  const [modules, setModules] = useState([]);
  const [newFind, setNewFind] = useState('')
  const [listings, setListings] = useState([])

  const [errorMessage, setErrorMessage] = useState(null)

  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 

  const [user, setUser] = useState(null)

  const listingFormRef = useRef()

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

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      listingService.setToken(user.token)
    }
  }, [])  

  const addListing = (listingObject) => {
    listingFormRef.current.toggleVisibility()
    listingService
      .create(listingObject)
      .then(returnedListing => {
        setListings(listings.concat(returnedListing))
      })
  }

  const handleFindChange = (event) => {
    setNewFind(event.target.value)
  }

  const modulesToShow = modules.filter(module => {
    return module.moduleCode.includes(newFind)
  })

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
      listingService.setToken(user.token)
      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      ) 
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const loginForm = () => (
    <Togglable buttonLabel="log in">
      <PageLogin />
      <LoginForm
        username={username}
        password={password}
        handleUsernameChange={handleUsernameChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleLogin}
      />
    </Togglable>   
  )

  const listingForm = () => (
    <Togglable buttonLabel="new listing" ref={listingFormRef}>
      <ListingForm
        createListing={addListing}
      />
    </Togglable>
  )

  return (
    <div>
      <Notification message={errorMessage} />
      {user === null ?
        loginForm() :
        <div>
          <p>{user.name} logged in</p>
          <h1>My Listings</h1>
          <ul>
            {listings.filter(listing => {
              return listing.user.username === user.username
            }).map(myListing => 
              <Listing key={myListing.id} listing={myListing} />
            )}
          </ul>
          {listingForm()}
        </div>
      }
      <h1>Current Listings</h1>
        <ul>
          {listings.map(listing => 
            <Listing key={listing.id} listing={listing} />
          )}
        </ul>
      <h1>Modules</h1>
      <form>
        <label>
          find modules:
          <input
            value={newFind}
            onChange={handleFindChange}
          />
        </label>
      </form>
      <div>
        {modulesToShow.map(module => 
            <Module key={module.moduleCode} module={module} />
        )}
      </div>
    </div>
  )
}

export default App;