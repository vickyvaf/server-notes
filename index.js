const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

const v1 = "/api/v1";

const usersRoutes = require("./app/api/v1/users/router");
const notesRoutes = require("./app/api/v1/notes/router");
const authRoutes = require("./app/api/v1/auth/router");

app.get("/", (_, res) => {
  res.status(200).json({
    message: "welcome to API notes",
  });
});

app.use(v1, usersRoutes);
app.use(v1, notesRoutes);
app.use(v1, authRoutes);

app.listen(port, () => {
  console.log("server ready...");
});
