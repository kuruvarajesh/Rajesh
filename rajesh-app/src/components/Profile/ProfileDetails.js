import React, { useState } from 'react'
import profile from '../Images/profile.png'
import './Profile.css'



const ProfileDetails = (props) => {
const [profileData,setProfileData] = useState(props.profileData)
const [name,setName] = useState(profileData.name?profileData.name:'')
const [email, setEmail] = useState(profileData.email?profileData.email:'')
const [password, setPassword] = useState(profileData.password?profileData.password:'')
const [dob, setDOB] = useState(profileData.date_of_birth?profileData.date_of_birth:'')
const [presentAddress, setPresentAddress] = useState(profileData.present_address?profileData.present_address:'')
const [address,setAddress] = useState(profileData.permanent_address?profileData.permanent_address:'')
const [city,setCity] = useState(profileData.city?profileData.city:'')
const [postalCode, setPostalCode] = useState(profileData.postal_code?profileData.postal_code:'')
const [country,setCountry] = useState(profileData.country?profileData.country:'')
// console.log(profileData)

const handleUserName = (event)=>{
  setName(event.target.value)
}

const handleEmail = (event)=>{
  setEmail(event.target.value)
}

const handlePassword = (event)=>{
  setPassword(event.target.value)
}

const handleDOB = (event)=>{
  setDOB(event.target.value)
}
const handlePresentAddress = (event)=>{
  setPresentAddress(event.target.value)
}

const handleAddress = (event) =>{
  setAddress(event.target.value)
}

const handleCity = (event) =>{
  setCity(event.target.value)
}
const handlePostalCode = (event) =>{
  setPostalCode(event.target.value)
}
const handleCountry = (event) =>{
  setCountry(event.target.value)
}

  const renderName = ()=>(
    <div className='inputs-container'>
      <div className='input-items'>
        <label>Your Name</label>
        <input type="text" value={name} onChange={handleUserName}/>
      </div>
      <div className='input-items'>
        <label>User Name</label>
        <input type='text' value={name} onChange={handleUserName}/>
    </div>
    </div>

  )
  const renderEmailAndPassword =() =>(
    <div className='inputs-container'>
    <div className='input-items'>
      <label>Date of Birth</label>
      <input type="email" value={email} onChange={handleEmail}/>
    </div>
    <div className='input-items'>
      <label>Password</label>
      <input type='password' value={password} onChange={handlePassword}/>
  </div>
  </div>
  )

  const renderDOBAndPresentAddress =() =>(
    <div className='inputs-container'>
    <div className='input-items'>
      <label>Date</label>
      <input type="date" value={dob} onChange={handleDOB}/>
    </div>
    <div className='input-items'>
      <label>present Address</label>
      <input type='text' value={presentAddress} onChange={handlePresentAddress}/>
  </div>
  </div>
  )


  const renderAddressCity =() =>(
    <div className='inputs-container'>
    <div className='input-items'>
      <label>Permanent Address</label>
      <input type="text" value={address} onChange={handleAddress}/>
    </div>
    <div className='input-items'>
      <label>City</label>
      <input type='text' value={city} onChange={handleCity}/>
  </div>
  </div>
  )

  const renderCodeAndCountry =() =>(
    <div className='inputs-container'>
    <div className='input-items'>
      <label>Postal Code</label>
      <input type="number" value={postalCode} onChange={handlePostalCode}/>
    </div>
    <div className='input-items'>
      <label>Country</label>
      <input type='text' value={country} onChange={handleCountry}/>
  </div>
  </div>
  )

  return (
    <div className='profile-details'>
      <div className='profile-image'>
      <img src={profile} className='profile-img' />
      </div>
      <form>
      {renderName()}
      {renderEmailAndPassword()}
      {renderDOBAndPresentAddress()}
      {renderAddressCity()}
      {renderCodeAndCountry()}
      </form>
    
    </div>
  )
}

export default ProfileDetails