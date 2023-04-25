const {
  twoSumTest,
  removeDuplicatesTest,
  sortedSquaresTest,
} = require("./helperFunctions/createTestFile.js");
const assert = require("assert");
const Model = require("./models.js");

const codeRoast = async (req, res) => {
  console.log("Problem Name Console Log", req.body.problemName.targetProblem);

  if (req.body.problemName.targetProblem === "TwoSum") {
    return twoSumTest(req.body);
  } else if (req.body.problemName.targetProblem === "Remove Duplicates") {
    return removeDuplicatesTest(req.body);
  } else if (req.body.problemName.targetProblem === "Squares of Sorted Array") {
    return sortedSquaresTest(req.body);
  } else {
    return "Problem Not Found";
  }
};
const getProblemData = async (req, res) => {
  const problemName = req.query.targetProblem;
  return await Model.getProblemPageData(problemName)
    .then((res) => res)
    .catch((err) => console.log("err in controller", err));
};
const testPassed = async (req, res) => {
  const passData = req.body;
  return await Model.testPassed(passData)
    .then((res) => console.log("RESULT IN CONTROLLER", res))
    .catch((err) => console.log("err in controller", err));
};
const testFailed = async (req, res) => {
  const failData = req.body;
  return await Model.testFailed(failData)
    .then((res) => console.log("RESULT IN CONTROLLER", res))
    .catch((err) => console.log("err in controller", err));
};
const updateGrading = async (req, res) => {
  console.log("request received in controller for GRADING ---------");
  const gradingData = req.body;
  return await Model.updateGrading(gradingData)
    .then((res) => console.log("result in controller for grading", res))
    .catch((err) => console.log("err in controller for grading", err));
};
const getHelp = async (req, res) => {
  const problemName = req.query.targetProblem;
  return await Model.getHelp(problemName)
    .then((res) => res)
    .catch((err) => console.log("Err in controller for get Help", err));
};

module.exports = {
  codeRoast,
  getProblemData,
  testPassed,
  testFailed,
  updateGrading,
  getHelp,
};
//run this when received code and created file.
//after receiving code from the front end
//create a <challengeName>.test.js file
//run the command below
//deal with results and send back to frontend
//if valid give reward
//if not valid give explanation why
//need to find a way to test only one file
