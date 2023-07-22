import React, { useEffect, useState } from 'react';
import './DialogueBox.css'; // Import your custom CSS file

const DialogueBox = (props) => {
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
            <h3>Dialog Title</h3>
            <p>Dialog content goes here...</p>
            <button onClick={handleClose}>Close</button>
            <button onClick={handleClose}>Save</button>
          </div>
        </div>
      )
  );
};

export default DialogueBox;
