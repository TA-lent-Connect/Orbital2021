import React from 'react' 

const Listing = ({ listing }) => {
  return (
    <div>
        <p>{listing.module}</p>
        <p>{listing.numberOfOpenings}</p>
        {/* <p>{listing.applicationDeadline}</p>
        <p>{listing.requirements}</p>
        <p>{listing.jobScope}</p>
        <p>{listing.otherInfo}</p>
        <p>{listing.moduleCoordinators}</p>
        <p>{listing.contactEmail}</p> */}
    </div>
  )
}

export default Listing