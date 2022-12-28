const express = require("express");
const { register, login } = require("./controller");

const router = express();

router.post("/auth/register", register);
router.post("/auth/login", login);

module.exports = router;
