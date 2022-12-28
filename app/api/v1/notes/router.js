const express = require("express");
const { index, find, create, update, destroy } = require("./controller");
const auth = require("../../../middlewares/verifyToken");

const router = express();

router.get("/notes", auth, index);
router.get("/notes/:id", auth, find);
router.post("/notes", auth, create);
router.put("/notes/:id", auth, update);
router.delete("/notes/:id", auth, destroy);

module.exports = router;
