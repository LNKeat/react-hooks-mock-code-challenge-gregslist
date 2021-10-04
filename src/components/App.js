import React, { useState, useEffect } from 'react'
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [fullListings, setFullListings] = useState([])

  useEffect(()=>{
    fetch('http://localhost:6001/listings/')
    .then(res => res.json())
    .then(listings => {
      setListings(listings)
      setFullListings(listings)
    })
  }, [])

  function onSearchSubmit(toSearch){
    if(!toSearch){
      setListings(fullListings)
    }else{
      const filteredListings = listings.filter(listing => listing.description.toLowerCase().includes(toSearch.toLowerCase()))
      setListings(filteredListings)
    }
  }

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
      <Header onSearchSubmit={onSearchSubmit} />
      {listings.length !== fullListings.length ? <button className='showlistings' onClick={()=> setListings(fullListings)}>Show All Listings</button> : null}
      <ListingsContainer listings={listings} handleListingDelete={handleListingDelete} />
    </div>
  );
}

export default App;
