import React from "react";

const Notes = ({notes, setNotes}) => {

//add state to hold the value in the text area
//add a change handler to handle any changes and SET the value for text area
const changeHandler = (e) => {
  setNotes(e.target.value)
}
  return (
    <>
    <textarea
    onChange = {changeHandler}
    value ={notes}
    id="notes"
    rows = "15"
    cols = "70">
    </textarea>
    </>
  );
};

export default Notes;
