const express = require("express");
const controller = require("./controllers.js");
const morgan = require('morgan')


const PORT = process.env.PORT || 3001;
const app = express();

app.use(morgan('dev'))
app.use(express.json());

app.get("/", (req, res) => {
  res.json("hi from express  ")
})

app.listen(PORT, () => {console.log(`Server is listening at http://localhost:${PORT}`)})