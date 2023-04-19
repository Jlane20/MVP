const express = require("express");
const controller = require("./controllers.js");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json("hi from express  ");
});



app.post("/roaster", async (req, res) => {
  controller.codeRoast(req, res)
    .then((data) => res.send(data))
    .catch((err) => res.send(err.message));
});
app.put("/testPassed", async(req, res) =>  {
  controller.testPassed(req, res).then((data) => res.send(data)).catch((err) => console.log(err))
})
app.put("/testFailed", async(req, res) =>  {
  controller.testFailed(req, res).then((data) => res.send(data)).catch((err) => console.log(err))
})
app.get("/problemData", (req, res) => {
  controller.getProblemData(req, res).then((data) => res.send(data)).catch((err) => res.send(err))
})
app.post("/grading", (req, res) => {
  console.log('request received in index for GRADING ----------')
  controller.updateGrading(req, res).then((data) => res.send(data)).catch((err) => res.send(err))
})
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
