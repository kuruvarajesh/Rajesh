import React, { useEffect, useState } from 'react' 

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

const getAllTransactions = async()=>{
        const url  = "https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=11&offset=0"
        const options = {
        method:"GET",
        headers :{
            "content-type":"application/json",
        "x-hasura-admin-secret":"g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role":"admin"
        }}
        const response = await fetch(url,options)
        const responseData = await response.json()
        const allTransactionsData = responseData.transactions

        const debitData = allTransactionsData.filter((data)=> data.type==="debit")
        const creditData = allTransactionsData.filter((data)=> data.type==="credit")
        console.log("R",allTransactionsData)


        setAllTransactions(allTransactionsData)
        setDebitTransData(debitData)
        setCreditTransData(creditData)
        
    
}


useEffect(()=>{
  getAllTransactions()
},[])

const handleTransTab = (tabId) => {
setActiveTab(tabId)
}


  return (
    <div className='transactions-header'>
      <Header header={"Transactions"} tabsData={tabsData} handleTabChange = {handleTransTab} activeTab={activeTab}/>
      <div className='transactions'>
        <div className='transactions-card'>
          <Last3Transactions data={activeTab==="allTransactions"?allTransactions:activeTab==="debit"?debitTransData:creditTransData} user={"admin"}/>
        </div>

      </div>
    </div>
  )
}

export default Transactions