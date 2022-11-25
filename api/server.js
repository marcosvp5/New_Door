const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const routes = require("./routes/index");
const db = require("./config/index");

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", routes);

const PORT = process.env.PORT || 3001;

db.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    })
  })
  .then(() => {
    console.log("Connected to DB");
  });
