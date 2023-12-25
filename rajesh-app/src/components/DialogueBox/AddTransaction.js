import React, { useEffect, useState } from 'react';
import DialogCancelIcon from '../Icons/DialogCancelIcon';
import './AddTransaction.css'; 

import { TRANSACTION_CATEGORY_TYPE } from '../../constants';
import { TRANSACTION_NAMES_TYPE } from '../../constants';
import Cookies from 'js-cookie'

const AddTransaction = (props) => {
  const [isOpen, setIsOpen] = useState(props.openDialog);
  const [name,setName] = useState('')
  const [amount,setAmount] = useState('')
  const [date,setDate] = useState('')
  const [category,setCategory] = useState('')
  const [type, setType] = useState('')
  const [transactiontype,setTransactiontype] = useState('')

  const accessToken = parseInt(Cookies.get("access_token"))
 

  const addTransactionData = async() => {
            const url  = "https://bursting-gelding-24.hasura.app/api/rest/add-transaction"
            const addData = {
              "name": name,
              "type": type,
              "category": category,
              "amount": amount,
              "date": date,
              "user_id": 1
          }
            const options = {
            method:"POST",
            headers :{
                "content-type":"application/json",
            "x-hasura-admin-secret":"g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
            "x-hasura-role":"user",
            "x-hasura-user-id":accessToken.toString()
            },
            body: JSON.stringify(addData)
          }
            const response = await fetch(url,options)
            const responseData = await response.json()
            console.log("...new res",responseData)
            props.addNewTransaction(responseData)
            // setName('')
            // setAmount('')
            // setDate('')
            // setCategory('')
            // setType('')
            // setTransactiontype('')
            
  }
  const updateTransactionData = async() => {
    const url = "https://bursting-gelding-24.hasura.app/api/rest/update-transaction"
    const data = {
      "id": props.updateData.id,
      "name": name,
      "type": type,
      "category": category,
      "amount": amount,
      "date": date
  }
    const options = {
        method:"POST",
        headers :{
            "content-type":"application/json",
        "x-hasura-admin-secret":"g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role":"user",
        "x-hasura-user-id":accessToken.toString()
        },
        body:JSON.stringify(data)
      }
        const response = await fetch(url,options)
        const responseData = await response.json()
        console.log("...re",responseData)
        props?.updateLast3Transactions(responseData)
  
}

// const dateObject = (date) =>{
//   const dateObj = new Date(date);
//   const year = dateObj.getFullYear();
//   const day = dateObj.getDate();
//   const month = dateObj.getMonth();
//   const formattedDateAndTime = `${day}/${month > 9? month:"0"+month }/${year}`; 
//   return formattedDateAndTime
// }


  useEffect(()=>{
    setIsOpen(props.openDialog)
    setTransactiontype(props.transactiontype?props.transactiontype:'')
    if(props.transactiontype){
      setName(props.updateData.transaction_name)
      setCategory(props.updateData.category)
      setAmount(props.updateData.amount)
      setType(props.updateData.type)
      // const formatDate = dateObject(props.updateData.date)
      setDate(props.updateData.date)
    }
  },[props.openDialog])

//   useEffect(()=>{
//     getAddTransactionData()
//   })

  const handleClose = () => {
    setIsOpen(false);
    props.handleCloseAdd(false)
  };

const handleAddTransaction = (event)=>{
    event.preventDefault()
    if (transactiontype){
      updateTransactionData()
      props.handleCloseAdd(false)
    }
    else{
      addTransactionData()
      props.handleCloseAdd(false)
    }
    
   

}

  const handleName = (event)=>{
    setName(event.target.value)
   
  }

  const handleTransactionType = (event)=>{
        setType(event.target.value)
       
  }
  
  const handleCategory = event=>{
    setCategory(event.target.value)
   
  }

  const handleAmount = (event)=>{
    setAmount(event.target.value)
   
  }
  
  const handleDate = (event)=>{
    setDate(event.target.value)
   
  }
  
   

  const renderName =() =>(
    <div className='add-input-items'>
      <label>Transaction Name</label>
      <input type="text" placeholder='Enter Name' value={name} onChange={handleName}/>
  </div>
  )
  const renderType =() =>(
    <div className='add-input-items'>
      <label>Transaction Type</label>
      <select className='input-element'
            id='transactionType'
            name='transactionType'
            value={type}
            onChange={handleTransactionType}
          >
            <option key={"initial "} value="">Select Type</option>
            {TRANSACTION_NAMES_TYPE.map((items)=>(
              <option key={items.value} value={items.value}>{items.label}</option>
            ))}
          </select>
    </div>
  )
  const renderCategory =() =>(
    <div className='add-input-items'>
      <label id="category">Category</label>
      <select className='input-element'
            id='category'
            name='category'
            value={category?category:"mobiles"}
            onChange={handleCategory}
          >
            <option key={"initial "} value="">Select Category</option>
            {TRANSACTION_CATEGORY_TYPE.map((item)=>(
              <option key={item.value} value={item.value}>{item.label}</option>
            ))}

          </select>
    </div>
  )
  const renderAmount =() =>(
    <div className='add-input-items'>
      <label> Amount</label>
      <input type="number" placeholder='Enter Your Amount' value={amount} onChange={handleAmount} />
    </div>
  )
  const renderDate =() =>(
    <div className='add-input-items'>
      <label>Date</label>
      <input type="date" placeholder='Select Date' value={date} onChange={handleDate} />
    </div>
  )

  return (  
      isOpen && (
        <div className={transactiontype?"update-container":"add-container"}>
          <div className="add-content">
            <div className='add-card'>
            <div className='add-text-card'>
            <div className='trans-cancel-container'>
            
            {props.transactiontype==="update"?<p className='add-head'>Update Transaction</p>:<p className='add-head'>Add Transaction</p>}
            <DialogCancelIcon onClick={handleClose}/>
            </div>
            {props.transactiontype==="update"?  <p className='add-para'> You can update your transaction here.</p>:  <p className='add-para'>Lorem ipsum dolor sit amet, consectetur.</p>}
            </div>
            <form onSubmit={handleAddTransaction}>
            {renderName()}
            {renderType()}
            {renderCategory()}
            {renderAmount()}
            {renderDate()}
            <div className='buttons'>
            {props.transactiontype==="update"?<button  className='add-trans-button' type='submit' >Update Transaction</button>:<button  className='add-trans-button' type='submit' >Add Transaction</button>}
            
         
            </div>
           
            </form>
            </div>
          </div>
        </div>
      )
  );
};

export default AddTransaction;
