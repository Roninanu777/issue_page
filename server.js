const express = require("express");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const apiRouter = require("./routes/api");
const app = express();

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
