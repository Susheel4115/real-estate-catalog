import React from 'react'
// import { MDBCol, MDBIcon } from "mdbreact";

const SearchBAr = () => {
  return (
    <div className='searchbar-container'>

  <form className="form">
  <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
</form>
        <button id='search-btn'>Add Property</button>
        </div>
  )
}

export default SearchBAr