import { React, useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import ProblemDescription from "./ProblemDescription";
import Notes from "./Notes";
import Whiteboarding from "./Whiteboard";
import PassModal from "../Modals/PassModal";
import FailModal from "../Modals/FailModal";
import HintModal from "../Modals/HintModal";
import axios from "axios";
import "./styles.css";


const Problem = ({ targetProblem }) => {
  const [code, setCode] = useState("");
  const editorRef = useRef(null);
  const [category, setCategory] = useState("");
  const [example1, setExample1] = useState("");
  const [example2, setExample2] = useState("");
  const [example3, setExample3] = useState("");
  const [prolbemBody, setProblemBody] = useState("");
  const [problemName, setProblemName] = useState("");
  const [stub, setStub] = useState("");
  const [notes, setNotes] = useState("");
  const [descriptionOpen, setDescriptionOpen] = useState(true);
  const [notesOpen, setNotesOpen] = useState(true);
  const [whiteboardOpen, setWhiteboardOpen] = useState(true);
  const [editorOpen, setEditorOpen] = useState(true);
  const [showFailModal, setFailModal] = useState(false);
  const [showHintModal, setHintModal] = useState(false);
  const [showPassModal, setPassModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [actual, setActual] = useState("");
  const [expected, setExpected] = useState("");
  const [assertion, setAssertion] = useState("");
  const [hint, setHint] = useState("");
  var passed;

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }
  function getEditorValue() {
    setCode(editorRef.current.getValue());
  }



  function updateGrading(passed) {
    const gradingData = {
      problemName: { targetProblem },
      category: category,
      //time to solve needs to be in seconds
      timeToSolve: 30,
      correct: passed,
      date: new Date().toISOString().split("T")[0],
    };
    axios.post("http://localhost:3001/grading", gradingData).then((res) => {
      console.log(res);
    });
  }

  function RoastCode() {
    console.log('clicked')
    const postData = {
      code: code,
      problemName: { targetProblem },
    };
    const putData = {
      code: code,
      notes: notes,
      problemName: { targetProblem },
      category: category,
    };

    axios.post("http://localhost:3001/roaster", postData).then((res) => {
      console.log(res);
      if (res.data === "All Test Passed!") {
        //throw up the pass modal
        setPassModal(true);
        //set the state for if the test passed
        //send the axios post request to updating the grading table
        updateGrading((passed = true));
        axios.put("http://localhost:3001/testPassed", putData).then((res) => {
          //needs to send code and notes
          console.log("RESPONSE FROM TEST PASS PUT", res);
        });
        //If the test doesn't pass follow this conditional
      } else {
        console.log(res)
        //throw up the pass modal
        setFailModal(true);
        //set the state for if the test passed
        //send the axios post request to updating the grading table
        updateGrading((passed = false));
        if (res.data.code !== undefined) {
          setErrorMessage(res.data.code);
          setExpected(JSON.stringify(res.data.expected));
          if (res.data.actual !== undefined) {
            setActual(JSON.stringify(res.data.actual));
          }
          if (res.data.operator !== undefined) {
            setAssertion(res.data.operator);
          }
        } else {
          setErrorMessage(res.data);
        }
        //Axios PUT to update database
        //update attempts;
        //update notes;
        axios.put("http://localhost:3001/testFailed", putData).then((res) => {
          console.log("RESPONSE FROM TEST FAIL PUT", res);
        });
      }
    });
  }

  //Page Load Use Effect
  useEffect(() => {
    function getNotesAndCode() {
      axios
        .get("http://localhost:3001/getHelp", {
          params: { targetProblem },
        })
        .then((res) => {
          setNotes(res.data[0].notes);
          setHint(res.data[0].code);
        });
    }
    function getProblemData() {
      axios
        .get("http://localhost:3001/problemData", {
          params: { targetProblem },
        })
        .then((res) => {
          setCategory(res.data[0].category);
          setExample1(res.data[0].example_1);
          setExample2(res.data[0].example_2);
          setExample3(res.data[0].example_3);
          setProblemBody(res.data[0].problem_body);
          setProblemName(res.data[0].problem_name);
          setStub(res.data[0].stub);
        });
    }
    getProblemData();
    getNotesAndCode();
  }, [targetProblem]);
  return (
    <>
      <div className="problemContainer">
        <div className="topPane">
          <button
            className="expandCollapseButton"
            onClick={() => setDescriptionOpen((prevOpen) => !prevOpen)}>
            Open/Close
          </button>
          <div
            className={`problemDescription ${
              descriptionOpen ? "" : "collapsed"}`} >
            <ProblemDescription
              category={category}
              name={problemName}
              example1={example1}
              example2={example2}
              example3={example3}
              body={prolbemBody} />
          </div>
          <button
            className="expandCollapseButton"
            onClick={() => setWhiteboardOpen((prevOpen) => !prevOpen)}>
            Open/Close
          </button>
          <div className={`whiteBoard ${whiteboardOpen ? "" : "collapsed"}`}>
            <h1>WhiteBoard</h1>
            <Whiteboarding />
          </div>
        </div>
        <button className="paneButton"></button>
        <div className="bottomPane">
          <button
            className="expandCollapseButton"
            onClick={() => setNotesOpen((prevOpen) => !prevOpen)}>
            Open/Close
          </button>
          <div className={`notesContainer ${notesOpen ? "" : "collapsed"}`}>
            <span>
              <h1>Notes</h1>
              <h2>IOCE - PseudoCode - Strategy</h2>
            </span>
            <Notes notes={notes} setNotes={setNotes} />
          </div>
          <button
            className="expandCollapseButton"
            onClick={() => setEditorOpen((prevOpen) => !prevOpen)}>
            Open/Close
          </button>
          <div className={`editorContainer ${editorOpen ? "" : "collapsed"}`}>
            <span style={{ fontSize: "30px" }}>
            <button className = "toastButton" style = {{height: "auto", width: "auto", backgroundColor: "rgb(0, 48, 73)"}} onClick={() => setHintModal(true)}>Hint</button> Code Editor<button className = "toastButton" style = {{height: "auto", width: "auto", backgroundColor: "rgb(0, 48, 73)"}}>Video Solution</button>
            </span>
            <Editor
              height="90%"
              width="90%"
              fontSize="30px"
              options={{
                minimap: { enabled: false },
                padding: 20,
                fontSize: 15,
              }}
              onChange={getEditorValue}
              theme="vs-dark"
              onMount={handleEditorDidMount}
              defaultLanguage="javascript"
              value={stub}/>
            <button className="toastButton" onClick={RoastCode}>
              Toast My Code
            </button>
          </div>
        </div>
      </div>
      <PassModal open={showPassModal} onClose={() => setPassModal(false)} />
      <FailModal
        open={showFailModal}
        onClose={() => setFailModal(false)}
        error={errorMessage}
        actual={actual}
        expected={expected}
        assertion={assertion}/>
      <HintModal
        open={showHintModal}
        onClose={() => setHintModal(false)}
        code={hint}/>
    </>
  );
};

export default Problem;
