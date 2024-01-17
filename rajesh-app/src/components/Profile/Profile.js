import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { TailSpin } from "react-loader-spinner";
import Header from '../Header/Header'
import ProfileDetails from './ProfileDetails'
import { FetchAPiCalls } from '../../APIServices/FetchApi';


import './Profile.css'
import Sidebar from '../Sidebar/Sidebar';

const Profile = () => {
    const [profileData,setProfileData] = useState({})
    const [apiStatus,setApiStatus] = useState("LOADING")
    const accessToken = parseInt(Cookies.get("access_token"))   

    const getProfileData = async() => {
            const url  = "/api/rest/profile"
            const response = await FetchAPiCalls.fetchUserData(url,"GET")
            const responseData = await response.json()
          
            const data  = responseData.users[0]
            setProfileData(data)
            setApiStatus("SUCCESS")
    }

    useEffect(()=>{
        getProfileData()
    },[])

const renderLoadingView = () => (
    <div className="loader-container">
    <TailSpin type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
)

const renderProfilePage = () => (
    <div className='profile-card'>
        <ProfileDetails profileData={profileData} />
      </div>

)

const getProfilePageData = () =>{
    switch(apiStatus){
        case "SUCCESS":
            return renderProfilePage()
        case "LOADING":
            return renderLoadingView()
    }
}

  return (
    <>
    <Sidebar />
    <div className='profile-header'>
    <Header header={"Profile"} />
    <div className='profile'>
      {getProfilePageData()}
    </div>
  </div>
  </>
  )
}

export default Profile