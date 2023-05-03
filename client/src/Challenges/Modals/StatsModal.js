import React from "react";

const StatsModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <>
      <div className="overlay" />
      <div className="statsModal">
        <button onClick={onClose}>Close</button>
        <h1>STATS MODAL!</h1>
      </div>
    </>
  );
};

export default StatsModal;
