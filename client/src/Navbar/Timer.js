import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimeOn] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timerOn]);

  return (
    <>
      <div className="timer">
        <div>
          <span className="minutes">
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}
          </span>
          :
          <span className="seconds">
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {!timerOn && time === 0 && (
            <button className = "timerButtonStart" onClick={() => setTimeOn(true)}>Start</button>
          )}
          {timerOn && <button className="timerButtonStop" onClick={() => setTimeOn(false)}>Stop</button>}
          {!timerOn && time !== 0 && (
            <button className = "timerButtonStart" onClick={() => setTimeOn(true)}>Resume</button>
          )}
          <br></br><br></br>
          {!timerOn && time > 0 && (
            <button className = "timerButtonStop" onClick={() => setTime(0)}>Reset</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Timer;
