import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Module from '.././components/Module'
import Listing from '.././components/Listing'
import Notification from '.././components/Notification'
import listingService from '.././services/listings'

function PageHome() {
  const [modules, setModules] = useState([]);
  const [newFind, setNewFind] = useState('')
  const [listings, setListings] = useState([])
  const [newListing, setNewListing] = useState('')

  const [errorMessage, setErrorMessage] = useState(null)

  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 

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

  const addListing = (event) => {
    event.preventDefault()
    const listingObject = {
      module: newListing
    }

    listingService
      .create(listingObject)
        .then(returnedListing => {
        setListings(listings.concat(returnedListing))
        setNewListing('')
      })
  }

  const handleListingChange = (event) => {
    setNewListing(event.target.value)
  }

  const handleFindChange = (event) => {
    setNewFind(event.target.value)
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleLogin = (event) => {
    event.preventDefault()
    console.log('logging in with', username, password)
  }

  const modulesToShow = modules.filter(module => {
    return module.moduleCode.includes(newFind)
  })

  return (
    <div>
    <Notification message={errorMessage} />
    <h1>Login</h1>
    <form onSubmit={handleLogin}>
        <div>
          username
            <input
            type="text"
            value={username}
            name="Username"
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          password
            <input
            type="password"
            value={password}
            name="Password"
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">login</button>
      </form>
    <h1>Listings</h1>
    <ul>
        {listings.map(listing => 
            <Listing
              key={listing.id} listing={listing}
            />
        )}
      </ul>
      <form onSubmit={addListing}>
        <input
          value={newListing}
          onChange={handleListingChange}
        />
        <button type="submit">save</button>
      </form>  

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