import React, { useState }  from "react";

function ListingCard({ listing, handleListingDelete }) {
  const [favStatus, setFavStatus] = useState(false)
  function handleFavClick(){
    setFavStatus(!favStatus)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favStatus ? (
          <button className="emoji-button favorite active" onClick={handleFavClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavClick}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={()=> handleListingDelete(listing)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
