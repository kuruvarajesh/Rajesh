import React, { useEffect, useState } from 'react' 
import { TailSpin } from "react-loader-spinner";
import NotFound from '../NotFound/NotFound';
import Sidebar from '../Sidebar/Sidebar';

import Header from '../Header/Header'

import './Transactions.css'
import Last3Transactions from '../Dashboard/Last3Transactions'

const initialTabsdata = [
  { name: 'All Transactions',id:"allTransactions", },
  { name: 'Debit', id:"debit",},
  { name: 'Credit', id:"credit" },
];

const Transactions = () => {

  const [credit, setCredit] = useState(0)
    const [debit, setDebit] = useState(0)
    const [allTransactions,setAllTransactions] = useState([])
    const [debitTransData, setDebitTransData] = useState([])
    const [creditTransData, setCreditTransData] = useState([])
    const [tabsData,setTabsData] = useState(initialTabsdata)
    const [activeTab, setActiveTab] = useState("allTransactions")
    const [apiStatus,setApiStates] = useState("LOADING")

const getAllTransactions = async()=>{
      const url  = "https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=15&offset=0"
      const options = {
      method:"GET",
      headers :{
          "content-type":"application/json",
      "x-hasura-admin-secret":"g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
      "x-hasura-role":"user",
      "x-hasura-user-id":"1"
      }}
        const response = await fetch(url,options)
      if (response.ok){
        const responseData = await response.json()
        
        const allTransactionsData = responseData.transactions

        const debitData = allTransactionsData.filter((data)=> data.type==="debit")
        const creditData = allTransactionsData.filter((data)=> data.type==="credit")
        // console.log("R",allTransactionsData)


        setAllTransactions(allTransactionsData)
        setDebitTransData(debitData)
        setCreditTransData(creditData)
        setApiStates("SUCCESS")
      }
      else{
        setApiStates("ERROR")
      }
       
        
    
}


useEffect(()=>{
  getAllTransactions()
},[])

const handleTransTab = (tabId) => {
setActiveTab(tabId)
}

const renderLoadingView = () =>{
  return (
  <div className="loader-container">
  <TailSpin type="ThreeDots" color="#0b69ff" height="50" width="50" />
  </div>
  )
}

const renderTransactionsView = () =>(
  <div className='transactions-card'>
    <ul className='transaction-header-card'>
    <li className='transaction-header-list' >
        <div className='trans-user-header'>User Name
        </div>
        <div className='trans-header'>Transaction Name</div>
        <div className='trans-header'>Category</div>
        <div className='trans-header'>Date</div>
        <div className='trans-header'>Amount</div>
      </li>
    </ul>
    <hr className='hr-line'/>
          <Last3Transactions data={activeTab==="allTransactions"?allTransactions:activeTab==="debit"?debitTransData:creditTransData} isUser={true}/>
        </div>
)

const renderView = () =>{
  switch(apiStatus){
    case "LOADING":
      return renderLoadingView()
      case 'SUCCESS':
        return renderTransactionsView()
      case "ERROR":
        return <NotFound text={"API Configuration Failed"} />
      default:
        return null
  }
}

  return (
    <>
    <Sidebar />
    <div className='transactions-header'>
      <Header header={"Transactions"} tabsData={tabsData} handleTabChange = {handleTransTab} activeTab={activeTab} />
      <div className='transactions'>
      {renderView()}
      </div>
    </div>
    </>

  )
}

export default Transactions