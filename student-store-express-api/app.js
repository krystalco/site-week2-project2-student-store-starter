const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const storeRouter = require("./routes/store")

app.use(cors()); //Enable CORS middleware to handle cross-origing requests/communication
app.use(morgan("dev")); //Use Morgan middleware with 'dev' for formatting
app.use(express.json()); //parse incoming requests with JSON

app.use("/store", storeRouter);


module.exports = app


