import React, { useState, useEffect } from 'react'
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])

  useEffect(()=>{
    fetch('http://localhost:6001/listings/')
    .then(res => res.json())
    .then(listings => setListings(listings))
  }, [])

  function handleListingDelete(listing){
    console.log(listing)
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: 'DELETE', 
    })
    .then(res => res.json())
    .then(() => {
      const filteredListings = listings.filter(oldListing => oldListing.id !== listing.id)
      setListings(filteredListings)
    })
  }
  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} handleListingDelete={handleListingDelete} />
    </div>
  );
}

export default App;
