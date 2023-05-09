import React, {useState, useEffect} from "react";
import HeatMap from "../heatMap"
import axios from 'axios'



const HomePage = () => {

  const [data, setData] = useState([]);
  let dataObject = data;
  let final = [];
  useEffect(() => {
    axios.get("http://localhost:3001/getTotalDates")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [])


    if(dataObject!== undefined){
      console.log(dataObject.length,'data object lengths')
       dataObject.forEach(function(date, index){
        final.push([new Date(date.date).toISOString().split('T')[0], Number(date.count)])
       })
        }
    console.log("FINAL FINAL",final)

  return (
    <>
    <h1>HomePage</h1>
    <HeatMap
    style={{zIndex: "0"}}data = {final}/>
    {/* <div>Need to add selection for category</div> */}
    </>
  );
};

export default HomePage;
