const express = require("express");
const app = express();
const connectDB = require("./config/db");
const routes = require("./routes/index");

// Connect Database
connectDB();


app.use(express.json());

app.use("/api", routes);

module.exports = app;