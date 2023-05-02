const pool = require("../database/db.js").pool;

async function getProblemPageData(problemName) {
  //problem will come from state handled in the main level.
  // onClick will grab the name of what was clicked on and send it down to the problem.js file
  //problem.js file will useEffect a get request to server to pull info form database;
  const value = [`${problemName}`];
  const query = `SELECT * FROM problemdesc WHERE problem_name = $1;`;
  try {
    const res = await pool.query(query, value);
    return res.rows;
  } catch (err) {
    console.log("error in model", err);
  }
}

async function testPassed(passData) {
  const code = passData.code;
  const notes = passData.notes;
  const category = passData.category;
  const problemName = passData.problemName.targetProblem;
  const values = [problemName, category, code, notes];
  const query = `INSERT INTO stats (problem_name, attempts, correct, category, code, notes)
  VALUES ($1, 1, 1, $2, $3, $4)
  ON CONFLICT (problem_name)DO UPDATE
  SET attempts =  (EXCLUDED.attempts * stats.attempts) + 1, correct =   (EXCLUDED.correct * stats.correct) + 1 , code = $3, notes = $4;`;
  try {
    const res = await pool.query(query, values);
  } catch (err) {
    console.log("error in model", err);
  }
}
async function testFailed(failData) {
  const notes = failData.notes;
  const category = failData.category;
  const problemName = failData.problemName.targetProblem;
  const values = [problemName, 1, category, notes];
  const query = `INSERT INTO stats (problem_name, attempts, category, notes)
  VALUES ($1, $2, $3, $4)
  ON CONFLICT (problem_name) DO UPDATE
  SET attempts = (EXCLUDED.attempts * stats.attempts) + 1, notes = $4;`;
  try {
    const res = await pool.query(query, values);
  } catch (err) {
    console.log("error in model-----------------------", err);
  }
}
async function updateGrading(gradingData) {
  const problemName = gradingData.problemName.targetProblem;
  const category = gradingData.category;
  const timeToSolve = gradingData.timeToSolve;
  const correct = gradingData.correct;
  const date = gradingData.date;
  const values = [problemName, category, timeToSolve, correct, date];
  const query = `INSERT INTO grading (problem_name, category, time_to_solve, correct, date)
  VALUES ( $1, $2, $3, $4, $5);`;
  try {
    const res = await pool.query(query, values);
    console.log(res);
  } catch (err) {
    console.log("error in model for update grading", err);
  }

  console.log("grading data in model----------", gradingData);
}
async function getHelp(problemName) {
  const value = [`${problemName}`];
  const query = `SELECT notes, code
  FROM stats
  WHERE problem_name = $1;`;
  try {
    const res = await pool.query(query, value);
    return res.rows;
  } catch (err) {
    console.log("error in model for getHelp");
  }
}

async function getTotalDates() {
  const query =`
    SELECT date, count(date)
    FROM grading
    GROUP BY date;`;
    try{
      const res = await pool.query(query);
      return res.rows;
    } catch(err) {
      console.log('error in model for getTotalDates')
    }
}

module.exports = {
  getProblemPageData,
  testPassed,
  testFailed,
  updateGrading,
  getHelp,
  getTotalDates
};
