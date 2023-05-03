import React from "react";


const PassModal = ({open, onClose}) => {

  if(!open) return null;
  return (
    <>
       <div className = "overlay"/>
        <div className="passModal">
          <h1>All Tests Passed!</h1>
          <h2 className = 'modal2'>Good Job!</h2>
          <button className = "toastButton" onClick = {onClose}>Close</button>
        </div>
    </>
  );
};

export default PassModal;
