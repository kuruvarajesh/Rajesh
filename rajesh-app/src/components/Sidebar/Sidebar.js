import React, {useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'
import AppLogo from '../Icons/AppLogo.js'
import HomeIcon from '../Icons/HomeIcon.js'
import TransIcon from '../Icons/TransIcon.js'
import ProfileIcon from '../Icons/ProfileIcon.js'
import LogoutIcon from '../Icons/LogoutIcon.js'
import Avatar from '../Icons/Avatar.png'
import LogoutDialog from '../DialogueBox/LogoutDialog.js'
import {HOME_ROUTE_PATH,TRANSACTIONS_ROUTE_PATH, PROFILE_ROUTE_PATH } from '../../constants';

import './Sidebar.css'


const Sidebar = (props) => {
  const [logout,setLogout] = useState(false)
  const [userName,setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")

  const accessToken = parseInt(Cookies.get("access_token"))

  const handleLogout = ()=>{
    setLogout(true)
  }

  const handleCloseLogout = ()=>{
    setLogout(false)
  }

  const getUserDetails = async() => {
      const url  = "https://bursting-gelding-24.hasura.app/api/rest/profile"
    const options = {
    method:"GET",
    headers :{
        "content-type":"application/json",
    "x-hasura-admin-secret":"g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
    "x-hasura-role":"user",
    "x-hasura-user-id":accessToken.toString()
    }}
    const response = await fetch(url,options)
    const responseData = await response.json()
  
    const data  = responseData.users[0]
    setUserName(data.name)
    setUserEmail(data.email)
  }


  useEffect(() => {
    getUserDetails()
  })



  return (
    <div>
        <div className="sidebar">
            <div className="top-section">
            <AppLogo />
            <h3 className='money'>Money <span className='matters'>Matters</span></h3>
        </div>
        <div className="middle-section" style={{flex:1}}>
            <div>
            <Link to={HOME_ROUTE_PATH} className='middle-details' > <HomeIcon style={{marginRight:"26px"}}/> <p>Dashboard</p> </Link>
            <Link to={TRANSACTIONS_ROUTE_PATH} className='middle-details' > <TransIcon style={{marginRight:"26px"}}/> <p>Transactions</p></Link>
            <Link to={PROFILE_ROUTE_PATH} className='middle-details' ><ProfileIcon style={{marginRight:"26px"}}/> <p>Profile</p></Link>
            </div>
        </div>
        <hr />
        <div className="bottom-section">  
           <img src={Avatar} style={{marginRight:"8px",}} />
           <div className='avatar-details'>
            <h6 className='rhye'>{userName}</h6>
            <p className='rhye-email'>{userEmail}</p>
           </div>
           <LogoutIcon onClick={handleLogout}/>
           <LogoutDialog openDialog={logout} handleCloseAdd={handleCloseLogout}/>
        </div>
    </div>
    </div>
  )
}

export default Sidebar