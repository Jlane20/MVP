import React from "react";

const HintModal = ({ open, code, onClose }) => {
  if (!open) return null;
  return (
    <>
      <div className = "overlay"/>
        <div className = "passModal">
          <h3>{code}</h3>
          <button className ="toastButton"onClick={onClose}>Close</button>
        </div>

    </>
  );
};

export default HintModal;
