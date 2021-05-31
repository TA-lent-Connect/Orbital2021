import React from 'react'

const Listing = ({ listing }) => {
  return (
    <div>
        <li className="listing">{listing.module}</li>
    </div>
  )
}

export default Listing