import React from "react";

const Listing = ({ listing }) => {
  return listing !== undefined ? (
    <div>
      <p>{listing.module}</p>
      <p>{listing.acadYear}</p>
      <p>{listing.semester}</p>
      <p>{listing.moduleCoordinator}</p>
      <p>{listing.email}</p>
      <p>{listing.jobScope}</p>
      <p>{listing.numberOfOpenings}</p>
      <p>{listing.deadline}</p>
      <p>{listing.requirements}</p>
      <p>{listing.applicationProcess}</p>
      <p>{listing.otherInfo}</p>
    </div>
  ) : null; // Or have some loading screen;
};

export default Listing;