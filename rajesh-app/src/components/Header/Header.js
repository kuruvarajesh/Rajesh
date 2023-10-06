import React, { useState } from 'react'
import AddTransactionIcon from '../Icons/AddTransactionIcon'
import './Header.css'
import AddTransaction from '../DialogueBox/AddTransaction';

import Cookies from 'js-cookie'



const Header = (props) => {
    const {header,tabsData } = props
    const accessToken = parseInt(Cookies.get("access_token"))
    const [addTransaction,setAddTransaction] = useState(false)
    
    const handleTabClick = (tabName) => {
      props.handleTabChange(tabName);
    };

    const handleOpenAdd = ()=>{
      setAddTransaction(true)
    }

    const handleCloseAdd = ()=>{
      setAddTransaction(false)
    }


  return (
    <div className= {tabsData? 'header2':'header'}>
        <div className='header-top'>
            <h1 className='header-heading'>{header}</h1>
       
        { accessToken !==3 &&<div>
            <button className='add-trans' onClick={handleOpenAdd}> <AddTransactionIcon />  Add Transactions</button>
            <AddTransaction openDialog={addTransaction} handleCloseAdd={handleCloseAdd}/>
        </div>}
        </div>
        {tabsData?  (
        <div className="tabs-container">  
          {tabsData.map((tab) => (
            <div
              key={tab.name}
              className={`tab ${props.activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.name}
            </div>
          ))}

        </div>
      ):null}
      
    </div>
  )
}

export default Header