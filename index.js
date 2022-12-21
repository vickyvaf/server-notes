const express = require("express");
const cors = require("cors");
const { dotenv } = require("./app/dotenv.config");

const port = process.env.PORT;

app = express();

app.use(cors());
app.use(express.json());

const v1 = "/api/v1/cms";

const usersRoutes = require("./app/api/v1/users/router");
const notesRoutes = require("./app/api/v1/notes/router");

app.get("/", (_, res) => {
  res.status(200).json({
    message: "api ready",
  });
});

app.use(v1, usersRoutes);
app.use(v1, notesRoutes);

app.listen(port, () => {
  console.log("server ready...");
});
