const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const lenguageRoute = require("./routes/language.routes")

const app = express();

// Settings
app.set("port", 4000)
  
//Middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())

// Routes
app.use("/api/languages",lenguageRoute)

module.exports = app;
