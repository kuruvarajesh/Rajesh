import React, { useEffect, useState } from 'react';
import DialogCancelIcon from '../Icons/DialogCancelIcon';
import LogoutIconDialog from '../Icons/LogoutIconDialog';
import './DialogueBox.css'; 

const LogoutDialog = (props) => {
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
            <div className='dialog-cancel-icon'>
            <DialogCancelIcon onClick={handleClose} />
            </div>
            <div className='dialog-content-2'>
            <LogoutIconDialog />
            <div className='dialog-card'>
            <div className='dialog-text-card'>
            <p className='dialog-head'>Are you sure want to Logout?</p>
            <p className='dialog-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
            </div>
            <div className='buttons'>
            <button onClick={handleClose} className='button delete-button'>Yes, Logout</button>
            <button onClick={handleClose} className='button leave-button' >Cancel</button>
            </div>
            </div>
          </div>
          </div>
        </div>
      )
  );
};

export default LogoutDialog;
