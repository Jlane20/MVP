import ReactEChart from "echarts-for-react";
import * as echarts from 'echarts';
import React, { useEffect} from "react";



const HeatMap= ({data}) => {


let newData = data;
console.log("new Data", newData)



const eChartsOption = {
  title: {
    top: 30,
    left: 'center',
    text: 'How Much Did I CracK?'
  },
  tooltip: {},
  visualMap: {
    min: 0,
    max: 100,
    type: 'piecewise',
    orient: 'horizontal',
    left: 'center',
    top: 65
  },
  calendar: {
    top: 120,
    left: 30,
    right: 30,
    cellSize: ['auto', 13],
    range: '2023',
    itemStyle: {
      borderWidth: 0.5
    },
    yearLabel: { show: false }
  },
  series: {
    type: 'heatmap',
    coordinateSystem: 'calendar',
    data: data
}
}

  return(
    <div><ReactEChart style ={{zIndex: "1"}}option = {eChartsOption}/></div>
  )
}

export default HeatMap;