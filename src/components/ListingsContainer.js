import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleListingDelete }) {
  return (
    <main>
      <ul className="cards">
        {listings.map(listing => {
          return <ListingCard key={listing.id} listing={listing} handleListingDelete={handleListingDelete} />
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
