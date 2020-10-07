"use strict";

const express = require("express");
require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const apiRouter = require("./routes/api");
const app = express();

// Initialized helmet
app.use(helmet());

app.use(cors());

// Request logger
app.use(morgan("tiny"));

app.use(express.json());
express.urlencoded({ extended: true });

app.use("/", apiRouter);

let PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
