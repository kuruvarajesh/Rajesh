import React, { useEffect, useState } from 'react';
import DialogDeleteIcon from '../Icons/DialogDeleteIcon';
import DialogCancelIcon from '../Icons/DialogCancelIcon';

import Cookies from 'js-cookie'

import './DialogueBox.css'; 

const DialogueBox = (props) => {
  const [isOpen, setIsOpen] = useState(props.openDialog);
  const [id, setId] = useState('')
  const accessToken = Cookies.get('access_token')
 
  useEffect(()=>{
    setIsOpen(props.openDialog)
    setId(props.id)

  },[props.openDialog])

  const deleteTransaction = async() => {
    const url = "https://bursting-gelding-24.hasura.app/api/rest/delete-transaction"
    const data = {
      "id": id,
    }
    const options = {
        method:"DELETE",
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
        // console.log(responseData)
}

  const handleClose = () => {
    setIsOpen(false);
    props.handleCloseAdd(false)
  };

  const handleDeleteTransaction = () => {
    deleteTransaction()
    props.handleCloseAdd(false)
  }

  return (
    
      
      isOpen && (
        <div className="update-container">
          <div className='dialog-content'>

         
         <div className='dialog-cancel-icon'>
            <DialogCancelIcon onClick={handleClose} />
            </div>
            <div className='dialog-content-2'>
            <DialogDeleteIcon />
            <div className='dialog-card'>
            <div className='dialog-text-card'>
            <p className='dialog-head'>Are you sure want to Delete?</p>
            <p className='dialog-para'>The transaction will be deleted immediately, You can't undo this action.</p>
            </div>
            <div className='buttons'>
            <button onClick={handleDeleteTransaction} className='button delete-button'>Yes, Delete</button>
            <button onClick={handleClose} className='button leave-button' >No, Leave</button>
            </div>
            </div>
          </div>
        </div>
        </div>
      )
  );
};

export default DialogueBox;
