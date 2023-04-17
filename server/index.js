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
app.get("/problemData", (req, res) => {
  controller.getProblemData(req, res).then((data) => res.send(data)).catch((err) => res.send(err))
})
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
