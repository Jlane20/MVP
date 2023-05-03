import React from "react";

const FailModal = ({ open, onClose, error, actual, assertion, expected }) => {
  if (!open) return null;

  return (
    <>
      <div className = "overlay"/>
        <div className="failModal">
          <h1>Sorry, keep crackin !</h1>
          <h3>Why? {error}</h3>
          <div className="modal2">Expected: {expected}</div>
          <div className="modal2"> to {assertion}</div>
          <div className="modal2">Actual: {actual}</div>
          <br></br>
          <div className = "quote">
          <blockquote>Oops is the sound we make when we improve our beliefs and strategies.</blockquote>
          <figcaption>-Eliezer Yudkowsky, <cite>Rationality: From AI to Zombies</cite></figcaption>
          </div>
          <button class = "toastButton" onClick = {onClose}>Close</button>
        </div>

    </>
  );
};

export default FailModal;
