const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");
const assert = require("assert");

// const testFile = path.join(__dirname, "testProblem");
// if (!fs.existsSync(testFile)) {
//   fs.mkdirSync(testFile, { recursive: true });
// }

// const createTestFile = async (code, heading, testCases) => {
//   const content = `${heading} ${code} ${testCases}`;
//   const jobId = uuid();
//   const fileName = `${jobId}.test.js`;
//   const filePath = path.join(testFile, fileName);
//   await fs.writeFileSync(filePath, content);
//   return fileName;
// };

const twoSumTest = (testCode) => {
  const fn = new Function(`return ${testCode.code}`);
  const test1 = fn().apply(null, [[3, 2, 4], 6]);
  const test2 = fn().apply(null, [[2, 7, 11, 15], 9]);
  const test3 = fn().apply(null, [[3, 3], 6]);
  try {
    assert.deepEqual(test1, [1, 2]);
    assert.deepEqual(test2, [0, 1]);
    assert.deepEqual(test3, [0, 1]);
    return "All Test Passed!";
  } catch (error) {
    return error;
  }
};
const removeDuplicatesTest = (testCode) => {
  console.log(testCode, "test code in testing file");
  const fn = new Function(`return ${testCode.code}`);
  const test1 = fn().apply(null, [[1, 1, 2]]);
  const test2 = fn().apply(null, [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]]);
  try {
    assert.deepEqual(test1, 2);
    assert.deepEqual(test2, 5);

    return "All Test Passed!";
  } catch (error) {
    return error;
  }
};

const sortedSquaresTest = (testCode) => {
  console.log("----------------------------");
  const fn = new Function(`return ${testCode.code}`);
  try {
    const test1 = fn().apply(null, [[-4, -1, 0, 3, 10]]);
    const test2 = fn().apply(null, [[-7, -3, 2, 3, 11]]);
    assert.deepEqual(test1, [0, 1, 9, 16, 100]);
    assert.deepEqual(test2, [4, 9, 9, 49, 121]);
    return "All Test Passed!";
  } catch (error) {
    console.log("error in test", error);
    return error;
  }
};

const backspaceCompareTest = (testCode) => {
  const fn = new Function(`return ${testCode.code}`);
  try {
    const test1 = fn().apply(null, ["ab#c", "ad#c"]);
    const test2 = fn().apply(null, ["ab##", "c#d#"]);
    const test3 = fn().apply(null, ["a#c", "b"]);
    assert.deepEqual(test1, true);
    assert.deepEqual(test2, true);
    assert.deepEqual(test3, false);
    return "All Test Passed!";

  } catch (error) {
    console.log('error in testing', error)
    return error;
  }
};

// const sortedSquaresTest = (testCode) =>{
//  return new Promise((resolve, reject) => {
//   const fn = new Function(`return ${testCode.code}`);
//   const test1 = fn().apply(null, [[-4, -1, 0, 3, 10]]);
//   const test2 = fn().apply(null, [[-7, -3, 2, 3, 11]]);
//   try {
//     assert.deepEqual(test1, [0, 1, 9, 16, 100]);
//     assert.deepEqual(test2, [4, 9, 9, 49, 121]);
//     setTimeout(() => {
//       reject(new Error('Time out hit'))
//     }, 5000)

//     return "All Test Passed!";

//   } catch (error) {
//     console.log('error in test',error)
//     return error;
//   }
//  })
// }

module.exports = {
  twoSumTest,
  removeDuplicatesTest,
  sortedSquaresTest,
  backspaceCompareTest
};
