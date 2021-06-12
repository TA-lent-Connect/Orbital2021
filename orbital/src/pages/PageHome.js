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

  console.log(listings)

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

  const listing=listings[0]


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
        <p>hi</p> :
        <div>
          <p>{user.name} logged in</p>
          <h1>My Listings</h1>
          {listingForm()}
        </div>
      }
      <h1>Current Listings</h1>

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

export default PageHome;