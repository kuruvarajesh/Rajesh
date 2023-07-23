import React from 'react'
import Header from '../Header/Header'
import ProfileDetails from './ProfileDetails'

import './Profile.css'

const Profile = () => {
  return (
    <div className='profile-header'>
    <Header header={"Profile"} />
    <div className='profile'>
      <div className='profile-card'>
     <ProfileDetails />
        {/* <Last3Transactions data={activeTab==="allTransactions"?allTransactions:activeTab==="debit"?debitTransData:creditTransData} user={"admin"}/> */}
      </div>

    </div>
  </div>
  )
}

export default Profile