import { React, useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Problem from "./Challenges/ProblemPage/Problem.js";
import HomePage from "./Navbar/HomePage.js";
import logo from "./patterncracker.png";
import Timer from "./Navbar/Timer.js";
import "./Challenges/ProblemPage/styles.css"

function App() {
  const [targetProblem, setTargetProblem] = useState("");

  const clickHandler = (e) => {
    setTargetProblem(e.target.innerText);
  };

  useEffect(() => {
    console.log(targetProblem);
  }, [targetProblem]);

  return (
    <>
      <div className="layout">
        <div className="App">
          <nav className="header">
            <div style = {{height: "80%"}}>
            <Link to="/">
            <img style={{ height: "80%" }} src={logo} alt=" logo"></img>
            </Link>

            </div>
            <ul className="navBar">
              <li style={{ width: "40px" }}>
                <Timer />
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <div className="dropdown">
                <button className="link">Problems</button>
                <div className="dropdown-menu">
                  Two Pointers
                  <ul>
                    <li>
                      <Link onClick={clickHandler} to="/twosum">
                        TwoSum
                      </Link>
                    </li>
                    <li>
                      <Link onClick={clickHandler} to="/removeDuplicates">
                        Remove Duplicates
                      </Link>
                    </li>
                    <li>
                      <Link onClick={clickHandler} to="/sortedSquares">
                        Squares of Sorted Array
                      </Link>
                    </li>
                    <li>
                      <Link onClick={clickHandler} to="/backspaceCompare">
                        Backspace Compare
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <li>
                <Link onClick={clickHandler}>
                  Stats Modal <br></br>
                  pass down targetProblem
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/twosum"
          element={<Problem targetProblem={targetProblem} />}
        />
        <Route
          path="/removeDuplicates"
          element={<Problem targetProblem={targetProblem} />}
        />
        <Route
          path="/sortedSquares"
          element={<Problem targetProblem={targetProblem} />}
        />
        <Route
          path="/backspaceCompare"
          element={<Problem targetProblem={targetProblem} />}
        />
      </Routes>
    </>
  );
}

export default App;
