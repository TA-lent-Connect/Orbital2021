import React, {useState} from 'react' 

const ListingForm = ({ createListing }) => {
  const [newListing, setNewListing] = useState('')

  const handleListingChange = (event) => {
    setNewListing(event.target.value)
  }

  const addListing = (event) => {
    event.preventDefault()
    createListing({
      module: newListing
    })

    setNewListing('')
  }

  return (
    <div className="formDiv">
      <h2>Create a new Listing</h2>

      <form onSubmit={addListing}>
        <input
          value={newListing}
          onChange={handleListingChange}
        />
        <button type="submit">save</button>
      </form>  
    </div>
  )
}

export default ListingForm