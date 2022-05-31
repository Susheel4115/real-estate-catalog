import React from 'react'
import Property from '../../images/imgs/house.png'

const SideBar = () => {
  return (
    <div className='sidebar-container'>
      <div className='sidebar-head'>Logo</div>
      <div className='sidbar-text-container'>
      <><img src={Property} alt='proper'/><span className='sidebar-text'>Property</span></>
      <div className='sidebar-text'><img />Assistance</div>      
        <div className='sidebar-text'><img />Received Interest</div>
        <div className='sidebar-text'><img />sent Interest</div>
        <div className='sidebar-text'><img />Property Views</div>
      <div className='sidebar-text'><img />Tariff Plan</div>      
      </div>
      
    </div>
  )
}

export default SideBar