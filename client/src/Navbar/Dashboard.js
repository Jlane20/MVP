import React, { useState } from "react";
import Table from "./Table.js";

const twoPointersData = [
  {
    Difficulty: "Easy",
    "Problem Name": "TwoSum",
    "Video Solution": "video link",
    "Current Stats": "stats",
  },
  {
    Difficulty: "Easy",
    "Problem Name": "Remove Duplicates",
    "Video Solution": "video link",
    "Current Stats": "stats",
  },
  {
    Difficulty: "Easy",
    "Problem Name": "Squares of Sorted ",
    "Video Solution": "<a href=www.link/>",
    "Current Stats": "stats",
  },
  {
    Difficulty: "Easy",
    "Problem Name": "Backspace String Compare ",
    "Video Solution": "<a href=www.link/>",
    "Current Stats": "stats",
  },
  {
    Difficulty: "Easy",
    "Problem Name": "Intersection of Two Linked List ",
    "Video Solution": "<a href=www.link/>",
    "Current Stats": "stats",
  },
  {
    Difficulty: "Medium",
    "Problem Name": "3Sum ",
    "Video Solution": "<a href=www.link/>",
    "Current Stats": "stats",
  },
  {
    Difficulty: "Medium",
    "Problem Name": "Subarray Product Less Than K ",
    "Video Solution": "<a href=www.link/>",
    "Current Stats": "stats",
  },
  {
    Difficulty: "Medium",
    "Problem Name": "Sort Colors ",
    "Video Solution": "<a href=www.link/>",
    "Current Stats": "stats",
  },
  {
    Difficulty: "Medium",
    "Problem Name": "4Sum ",
    "Video Solution": "<a href=www.link/>",
    "Current Stats": "stats",
  },
  {
    Difficulty: "Medium",
    "Problem Name": "Shortest Unsorted Continuous Subarray ",
    "Video Solution": "<a href=www.link/>",
    "Current Stats": "stats",
  },
];
const slidingWindowData = [
  {
    Difficulty: "Medium",
    "Problem Name": "Maximum Subarray",
    "Video Solution": "video link",
    "Current Stats": "stats",
  },
  {
    Difficulty: "Medium",
    "Problem Name": "Minimum Size Subarray Sum",
    "Video Solution": "video link",
    "Current Stats": "stats",
  },
  {
    Difficulty: "Medium",
    "Problem Name": "Fruit Into Baskets",
    "Video Solution": "video link",
    "Current Stats": "stats",
  },
  {
    Difficulty: "Medium",
    "Problem Name": "Longest Substring Without Repeating Characters",
    "Video Solution": "video link",
    "Current Stats": "stats",
  },
  {
    Difficulty: "Medium",
    "Problem Name": "Longest Repeating Character Replacement",
    "Video Solution": "video link",
    "Current Stats": "stats",
  },
  {
    Difficulty: "Medium",
    "Problem Name": "Max Consecutive Ones",
    "Video Solution": "video link",
    "Current Stats": "stats",
  },
  {
    Difficulty: "Medium",
    "Problem Name": "Permutation in String",
    "Video Solution": "video link",
    "Current Stats": "stats",
  },
  {
    Difficulty: "Medium",
    "Problem Name": "Find All Anagrams In String",
    "Video Solution": "video link",
    "Current Stats": "stats",
  },
  {
    Difficulty: "Hard",
    "Problem Name": "Minimum Window Substring",
    "Video Solution": "video link",
    "Current Stats": "stats",
  },
  {
    Difficulty: "Hard",
    "Problem Name": "Substring with Concatenation fo All Words",
    "Video Solution": "video link",
    "Current Stats": "stats",
  },
];
const tbfsData = [{ object: "fake data" }];
const tdfsData = [{ object: "fake data" }];
const bsData = [{ object: "fake data" }];

const Dashboard = () => {
  const [tpCollapsed, setTpCollapsed] = useState(false);
  const [swCollapsed, setSwCollapsed] = useState(false);
  const [tdfsCollapsed, setTdfsCollapsed] = useState(false);
  const [tbfsCollapsed, setTbfsCollapsed] = useState(false);
  const [bsCollapsed, setBsCollapsed] = useState(false);

  return (
    <>
      {/* <h1>Problem List</h1>
      <div className="patternTables">
        <button onClick={() => setTpCollapsed((prevOpen) => !prevOpen)}>
          Two Pointers
        </button>
        <div className="tableContainer">
          <Table
            collapsed={tpCollapsed}
            close={() => setTpCollapsed(false)}
            data={twoPointersData}
          />
        </div>
        <button onClick={() => setSwCollapsed((prevOpen) => !prevOpen)}>
          Sliding Window
        </button>
        <div className="tableContainer">
          <Table
            collapsed={swCollapsed}
            close={() => setSwCollapsed(false)}
            data={slidingWindowData}
          />
        </div>
        <button onClick={() => setTdfsCollapsed((prevOpen) => !prevOpen)}>
          Tree DFS
        </button>
        <div className="tableContainer">
          <Table
            collapsed={tdfsCollapsed}
            close={() => setTdfsCollapsed(false)}
            data={tdfsData}
          />
        </div>
        <button onClick={() => setTbfsCollapsed((prevOpen) => !prevOpen)}>
          Tree BFS
        </button>
        <div className="tableContainer">
          <Table
            collapsed={tbfsCollapsed}
            close={() => setTbfsCollapsed(false)}
            data={tbfsData}
          />
        </div>
        <button onClick={() => setBsCollapsed((prevOpen) => !prevOpen)}>
          Modified Binary Search
        </button>
        <div className="tableContainer">
          <Table
            collapsed={bsCollapsed}
            close={() => setBsCollapsed(false)}
            data={bsData}
          />
        </div>
      </div> */}
    </>
  );
};

export default Dashboard;
