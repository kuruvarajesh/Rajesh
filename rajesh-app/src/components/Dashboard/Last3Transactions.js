import React, { useEffect, useState } from 'react'
import DebitIcon from '../Icons/DebitIcon'
import CreditIcon from '../Icons/CreditIcon'
import DeleteIcon from '../Icons/DeleteIcon'
import EditIcon from '../Icons/EditIcon'
import DebitIconNormal from '../Icons/DebitIconNormal'
import CreditIconNormal from '../Icons/CreditIconNormal'
import last3User from '../Images/last3User.png'
import AddTransaction from '../DialogueBox/AddTransaction'
import DialogueBox from '../DialogueBox/DialogueBox'

import Cookies from 'js-cookie'

import './Last3Transactions.css'

const Last3Transactions = (props) => {
   const [data,setData] = useState([])
   const [updateTrans,setUpdateTrans] = useState(false)
   const [deleteTrans, setDeleteTrans] = useState(false)
   const [updateData, setUpdateData]  = useState('')
   const [deleteTansId, setDeleteTransId] = useState('')

   const accessToken = parseInt(Cookies.get("access_token"))

  const handleUpdateTransaction =(trans,id)=> {
    setUpdateTrans(true)
    setUpdateData(trans)
  }

  const handleDeleteTransaction = (id) => {
    setDeleteTrans(true)
    setDeleteTransId(id)
  }
  
  const handleCloseAdd = () =>{
    setUpdateTrans(false)
    setUpdateTrans(false)
  }
  const handleCloseDelete = () =>{
    setDeleteTrans(false)
    
  }

const dateObject = (date) =>{
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const options = { month: 'short' };
    const month = dateObj.toLocaleString('en-US', options);
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const meridiem = hours >= 12 ? "PM" : "AM";

    const formattedDateAndTime = `${day} ${month} ${hours % 12 === 0 ? 12 : hours % 12}:${minutes.toString().padStart(2, '0')} ${meridiem}`; 
    return formattedDateAndTime
}

  return (
    <ul className='un-list'>
        {props.data.map((last,index)=>(
          <>
            <li className='list' key={index}>
              <div className='transaction-user-name'>
                <div className='trans-icon'>
              {last.type==="debit"? props.user==="admin"?<DebitIconNormal/>:<DebitIcon />: props.user==="admin"? <CreditIconNormal />: <CreditIcon />}
              </div>
              {accessToken === 3 && <img src={last3User} alt="user" className='trans-user'/>}
              <p className='trans-desc'>Arlene McCoy</p>
              </div>
              <p className='trans-desc'>{last.transaction_name}</p>
              <p className='trans-desc'>{last.category}</p>
              <p className='trans-desc'>{dateObject(last.date)}</p>
              <p className={last.type==="debit"?"l-debit-amount":"l-credit-amount"}>{last.amount}</p>
              {accessToken !== 3 && <div className='edit-delete'>
                <button className='edit-delete-buttons' onClick={()=>handleUpdateTransaction(last,last.id)}> <EditIcon /></button>
                <AddTransaction openDialog={updateTrans} updateData={updateData} transactiontype={"update"} handleCloseAdd={handleCloseAdd} updateLast3Transactions ={props.updateLast3Transactions}/>
                <button className='edit-delete-buttons' onClick={()=>handleDeleteTransaction(last.id)}><DeleteIcon /></button>
                <DialogueBox openDialog={deleteTrans} handleCloseAdd={handleCloseDelete} id = {deleteTansId}  handleDeleteTrans = {props.handleDeleteTrans}/>
              </div>}
            </li>
           {index !== (props.data.length-1) && <hr className='hr-line'/>}
            </>
        ))}
    </ul>
  )
}

export default Last3Transactions