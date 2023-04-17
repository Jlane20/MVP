const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");
const assert = require('assert')

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

module.exports = {
  twoSumTest,
};
