import React from 'react'
import AppLogo from '../Icons/AppLogo.js'
import HomeIcon from '../Icons/HomeIcon.js'
import TransIcon from '../Icons/TransIcon.js'
import ProfileIcon from '../Icons/ProfileIcon.js'
import LogoutIcon from '../Icons/LogoutIcon.js'
import Avatar from '../Icons/Avatar.png'


import './Sidebar.css'

const Sidebar = () => {
  return (
    <div>
         <div class="sidebar">
            <div class="top-section">
            <AppLogo />
            <h3 className='money'>Money <span className='matters'>Matters</span></h3>
          
        </div>
        <div class="middle-section" style={{flex:1}}>
            <div>
            <a href="#" className='middle-details'> <HomeIcon style={{marginRight:"26px"}}/> <p>Dashboard</p> </a>
            <a href="#" className='middle-details'> <TransIcon style={{marginRight:"26px"}}/> <p>Transaction</p></a>
            <a href="#" className='middle-details'><ProfileIcon style={{marginRight:"26px"}}/> <p>Profile</p></a>
            </div>
        </div>
        <hr />
        <div class="bottom-section">
           
           <img src={Avatar} style={{marginRight:"8px",}} />
           <div className='avatar-details'>
            <h6 className='rhye'>Rhye</h6>
            <p className='rhye-email'>olivia@untitledui.com</p>
           </div>
           <LogoutIcon />
        </div>
    </div>
    
    </div>
  )
}

export default Sidebar