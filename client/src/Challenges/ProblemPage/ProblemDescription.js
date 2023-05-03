import React from "react";


const ProblemDescription = ({category, name, example1, example2, example3, body, stub}) => {


  return (
    <>
      <h1>Problem: {name}</h1>
      <h2>Category: {category}</h2>
      <p>
        {body}
      </p>
      <p><b>Example:</b> {example1}</p>
      <p><b>Example:</b> {example2}</p>
      <p><b>Example:</b> {example3}</p>
    </>
  );
};

export default ProblemDescription;
