import React, { useEffect, useState } from 'react'
import { TailSpin } from "react-loader-spinner";
import creditImg from '../Images/credit.png'
import debitImg from '../Images/debit.png'
import './Dashboard.css'
import Barchart from '../PieChart/Barchart'
import Last3Transactions from './Last3Transactions'
import Header from '../Header/Header'

const Dashboard = (props) => {
    const [apiData,setApiData] = useState([])
    const [credit, setCredit] = useState(0)
    const [debit, setDebit] = useState(0)
    const [lastTransactions,setTransactions] = useState([])
    const [data,setData]= useState([])
    const [apiStatus,setApiStatus] = useState("LOADING")

const getTransactionsTotal = async()=>{
        const url  = "https://bursting-gelding-24.hasura.app/api/rest/credit-debit-totals"
        const options = {
        method:"GET",
        headers :{
            "content-type":"application/json",
        "x-hasura-admin-secret":"g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role":"user",
        "x-hasura-user-id":"1"
        }}
        const response = await fetch(url,options)
        const data = await response.json()
        const amount = data.totals_credit_debit_transactions
        setDebit(amount[0].sum)
        setCredit(amount[1].sum)
        
    
}

const getLastTransactions = async() =>{
        const url  = "https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=3&offset=0"
        const options = {
        method:"GET",
        headers :{
            "content-type":"application/json",
        "x-hasura-admin-secret":"g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role":"user",
        "x-hasura-user-id":"1"
        }}
        const response = await fetch(url,options)
        const data = await response.json()

        const transactions = data.transactions
        // console.log(transactions)
        setTransactions(transactions)
        setApiStatus("SUCCESS")
}

const getLast7daysTransactions = async() =>{
    const url  = "https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-7-days"
    const options = {
    method:"GET",
    headers :{
        "content-type":"application/json",
    "x-hasura-admin-secret":"g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
    "x-hasura-role":"user",
    "x-hasura-user-id":"1"
    }}
        const response = await fetch(url,options)
        const data = await response.json()
       
        // const transactions = data.transactions
        // // console.log(transactions)
        // setTransactions(transactions)
}

useEffect(()=>{
    getLastTransactions()
    getTransactionsTotal()
    getLast7daysTransactions()
   
},[])


const renderLoadingView = () => (
    <div className="loader-container">
    <TailSpin type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
    )

  const renderDashBoardPage = () =>(
    <div className='dashboard-page'>
    <div className='dashboard-top'>
    <div className='dash-top-card'>
        <div className='top-credit-debit'>
            <h1 className='credit-amount'>${credit}</h1>
            <p className='credit'>Credit</p>
        </div>
        <div>
        <img src={creditImg}  alt="credit"/>
        </div>
    </div>

    <div className='dash-top-card'>
        <div className='top-credit-debit'>
            <h3 className='debit-amount'>${debit}</h3>
            <p className='credit'>Debit</p>
        </div>
       
        <img src={debitImg}  alt="debit"/>
    
    </div>
    </div>
    <div className='last-trans-section'>
    <p className='last-transaction'>Last Transaction</p>
    <div className='last-trans-card'>
    <Last3Transactions data = {lastTransactions} isUser={true}/>
    </div>

    </div>
    <div className='dash-bottom-section'>
        <p className='last-transaction'>Debit & Credit Overview</p>
        <div className='bottom-trans-card'>
            <Barchart />
        </div>
    </div>
    </div>
  )

const getDashBoardPageData = () =>{
    switch(apiStatus){
        case "SUCCESS":
            return renderDashBoardPage()
        case "LOADING":
            return renderLoadingView()
    }
}

  return (
   <div className='dashboard-header'>
    <Header header={"Accounts"} tabsOpen={false}/>
    <div className='dashboard'>
    
       {getDashBoardPageData()}
    
    </div>
    </div>
  )
}

export default Dashboard