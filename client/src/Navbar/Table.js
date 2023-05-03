import React from "react";
import "../Challenges/ProblemPage/styles.css"

const Table = ({ collapsed, data }) => {
  const keys = Object.keys(data[0]);
  if(!collapsed) return null;
  return (
    <>
      <table className="table">
        <thead className="thead">
          <tr className="trHead">
            {keys.map((item, index) => (
              <th className="thHead" key={index}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className = "tbody">
          {/* {data.map((object, index) => (
            <tr className = "trBody" key={index}>
              {keys.map((item, index) => {
                const value = object[item];
                return <td className = "tdBody" key={index}><a href={'link'}>{value}</a></td>;
              })}
            </tr>
          ))} */}
          {data.map((val, i)=>
          <tr key={i}>
            <td>
              {val.Difficulty}
            </td>
            <td>
              <a href = {"link to problem"}>{val["Problem Name"]}</a>
            </td>
            <td>
              <a href = {val["Video Solution"]}>Video</a>
            </td>
            <td>
              <a href = {"link to stats"}>{val["Current Stats"]}</a>
            </td>
          </tr>)}
        </tbody>
      </table>
    </>
  );
};

export default Table;
