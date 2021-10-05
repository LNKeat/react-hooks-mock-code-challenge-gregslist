import React, { useState, useEffect } from 'react'


function AddListingForm({ handleAddListing }){
  const [formData, setFormData] = useState({
    description: '',
    image: '',
    location: ''
  })

  function handleInputChange(e){
    const name = e.target.name 
    const value = e.target.value
    const newFormData = {...formData, [name]:value }
    setFormData(newFormData)
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch('http://localhost:6001/listings/', {
      method: 'POST', 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then(res => res.json())
    .then(newListing => handleAddListing(newListing))
  }

  return (
   <form className="form" onSubmit={handleSubmit}>
     <input className="inputs"  type="text" name="description" value={formData.description} placeholder="Item Description" onChange={handleInputChange} />
     <input className="inputs" type="text" name="image" value={formData.image} placeholder="Image URL" onChange={handleInputChange} />
     <input className="inputs" type="text" name="location" value={formData.location} placeholder="Location" onChange={handleInputChange} />
    <input className="button" type="submit" />
   </form>
  )
}

export default AddListingForm