const pool = require('../database/db.js').pool
async function getProblemPageData(problemName) {
  //problem will come from state handled in the main level.
  // onClick will grab the name of what was clicked on and send it down to the problem.js file
  //problem.js file will useEffect a get request to server to pull info form database;
  const value = [`${problemName}`]
  const query = `SELECT * FROM problemdesc WHERE problem_name = $1;`
  try {
    const res = await pool.query(query, value);
    return res.rows;
  }catch(err) {
    console.log('error in model', err)
  }
}


module.exports = {
  getProblemPageData
}