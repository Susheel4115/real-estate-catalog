import React from 'react';
// import { MDBCol, MDBIcon } from "mdbreact";
import './search.css'
import serach from '../images/search.png'
import add from '../images/Add_plus.png'
import line from  '../images/Line.png'
const SearchBAr = () => {
  return (
    <div className='searchbar-container'>
  <form className="form" >
  <input className="form-control"  type="text" placeholder="     Search PPID" aria-label="Search"  />
  <img className='line' src={line} alt='dta'/> 

  <img id='search'  src={serach} alt='data'/>

</form>

        <button id='search-btn'>
          <img className='plus' src={add} alt='data'/> 
          Add Property
          </button>

        </div>
  )
}

export default SearchBAr