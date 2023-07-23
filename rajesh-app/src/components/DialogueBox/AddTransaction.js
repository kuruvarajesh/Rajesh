import React, { useEffect, useState } from 'react';
import DialogDeleteIcon from '../Icons/DialogDeleteIcon';
import './DialogueBox.css'; 
import AddTransaction from '../Icons/AddTransaction';

const AddTransaction = (props) => {
  const [isOpen, setIsOpen] = useState(props.openDialog);
 
  useEffect(()=>{
    setIsOpen(props.openDialog)
  },[props.openDialog])

  const handleClose = () => {
    setIsOpen(false);
    props.handleCloseAdd(false)
  };

  return (
    
      
      isOpen && (
        <div className="dialog-container">
          <div className="dialog-content">
            <DialogDeleteIcon />
            <div className='dialog-card'>
            <div className='dialog-text-card'>
            <p className='dialog-head'>Are you sure want to Delete?</p>
            <p className='dialog-para'>The transaction will be deleted immediately, You can't undo this action.</p>
            </div>
            <div className='buttons'>
            <button onClick={handleClose} className='button delete-button'>Yes, Delete</button>
            <button onClick={handleClose} className='button leave-button' >No, Leave</button>
            </div>
            </div>
          </div>
        </div>
      )
  );
};

export default AddTransaction;
