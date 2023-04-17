const { twoSumTest } = require("./helperFunctions/createTestFile.js");
const assert = require('assert')
const Model = require('./models.js')



const codeRoast = async (req, res) => {
  console.log('Problem Name Console Log',req.body)
  if(req.body.problemName.targetProblem === 'TwoSum'){
    return twoSumTest(req.body);
  } else {
    return "Problem Not Found"
  }
};

const getProblemData = async (req, res)=> {
  const problemName = req.body;
 return  await Model.getProblemPageData('TwoSum').then(res => res).catch(err => console.log('err in controller', err))
}



module.exports = {
  codeRoast,
  getProblemData
};
//run this when received code and created file.
//after receiving code from the front end
//create a <challengeName>.test.js file
//run the command below
//deal with results and send back to frontend
//if valid give reward
//if not valid give explanation why
//need to find a way to test only one file
