import React from 'react'
import userIcon from '../../images/User_icon.png'
import './header.css'
import down from '../../images/down.png'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-id'>USER ID: 06PPD125</div>
      <div className='logout'>
        <img className='user' src={userIcon} alt='user'/>

        <div className='username'>USER NAME</div>

        <img className='down' src={down} alt='data'/>
        </div>
  
 

      </div>
  )
}

export default Header;