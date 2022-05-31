import React from 'react'
import userIcon from '../../images/User_icon.png'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-id'>USER ID: 06PPD125</div>
      <div className='logout'><img src={userIcon} alt='user'/>USER NAME</div>

      </div>
  )
}

export default Header;