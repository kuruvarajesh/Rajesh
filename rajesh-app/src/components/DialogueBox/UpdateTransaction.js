import React, { useEffect, useState } from 'react';
import DialogCancelIcon from '../Icons/DialogCancelIcon';
import './AddTransaction.css'; 

const UpdateTransaction = (props) => {
  const [isOpen, setIsOpen] = useState(props.openDialog);
  
  const [name,setName] = useState('')
  const [amount,setAmount] = useState('')
  const [date,setDate] = useState('')
  const [category,setCategory] = useState('')
  const [type, setType] = useState('')
 

  const getAddTransactionData = async() => {
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
            "x-hasura-role":"admin"
            },
            body:JSON.stringify(data)
          }
            const response = await fetch(url,options)
            const responseData = await response.json()
            // console.log(responseData)
  }

  useEffect(()=>{
    setIsOpen(props.openDialog)
    setName(props.updateData.transaction_name)
    setCategory(props.updateData.category)
    setAmount(props.updateData.amount)
    setDate(props.updateData.date)
    setType(props.updateData.type)
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
    getAddTransactionData()

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
            <option value='debit'>Debit</option>
            <option value='credit'>Credit</option>
          </select>
    </div>
  )
  const renderCategory =() =>(
    <div className='add-input-items'>
      <label id="category">Category</label>
      <select className='input-element'
            id='category'
            name='category'
            value={category}
            onChange={handleCategory}
          >
            <option value='shopping'>Shopping</option>
            <option value='food'>Food</option>
            <option value='grocery'>Grocery</option>
            <option value='mobiles'>Mobiles</option>
            <option value='sports'>Sports</option>
            <option value='netflixSubscription'>NetFlix Subscription</option>

          </select>
    </div>
  )
  const renderAmount =() =>(
    <div className='add-input-items'>
      <label> Amount</label>
      <input type="text" placeholder='Enter Your Amount' value={amount} onChange={handleAmount} />
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
        <div className="update-container">
          <div className="add-content">
            <div className='add-card'>
            <div className='add-text-card'>
            <div className='trans-cancel-container'>
            <p className='add-head'>Update Transaction</p>
            <DialogCancelIcon onClick={handleClose}/>
            </div>
            <p className='add-para'>You can update your transaction here.</p>
            </div>
            <form onSubmit={handleAddTransaction}>
            {renderName()}
            {renderType()}
            {renderCategory()}
            {renderAmount()}
            {renderDate()}
            <div className='buttons'>
            <button  className='add-trans-button' type='submit' >Add Transaction</button>
            
         
            </div>
           
            </form>
            </div>
          </div>
        </div>
      )
  );
};

export default UpdateTransaction;
