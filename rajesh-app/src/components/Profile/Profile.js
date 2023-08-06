import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { TailSpin } from "react-loader-spinner";
import Header from '../Header/Header'
import ProfileDetails from './ProfileDetails'


import './Profile.css'
import Sidebar from '../Sidebar/Sidebar';

const Profile = () => {
    const [profileData,setProfileData] = useState({})
    const [apiStatus,setApiStatus] = useState("LOADING")
    const accessToken = parseInt(Cookies.get("access_token"))   

    const getProfileData = async() => {
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