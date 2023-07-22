import React, { useState } from 'react'
import AddTransaction from '../Icons/AddTransaction'
import './Header.css'
import DialogueBox from '../DialogueBox/DialogueBox';

const tabsData = [
  { name: 'All Transactions',id:"allTransactions" },
  { name: 'Debit', id:"debit" },
  { name: 'Credit', id:"credit" },
];

const Header = (props) => {
    const {header,tabsOpen } = props
    const [activeTab, setActiveTab] = useState('All Transactions');
    const [addTransaction,setAddTransaction] = useState(false)
    
    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    };

    const handleOpenAdd = ()=>{
      setAddTransaction(true)
    }

    const handleCloseAdd = ()=>{
      setAddTransaction(false)
    }


  return (
    <div className= {tabsOpen? 'header2':'header'}>
        <div className='header-top'>
            <h1 className='header-heading'>{header}</h1>
       
        <div>
            <button className='add-trans' onClick={handleOpenAdd}> <AddTransaction />  Add Transactions</button>
            <DialogueBox openDialog={addTransaction} handleCloseAdd={handleCloseAdd}/>
        </div>
        </div>
        {tabsOpen && (
        <div className="tabs-container">  
          {tabsData.map((tab) => (
            <div
              key={tab.name}
              className={`tab ${activeTab === tab.name ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.name)}
            >
              {tab.name}
            </div>
          ))}

        </div>
      )}
      
    </div>
  )
}

export default Header