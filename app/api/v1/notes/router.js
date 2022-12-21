const express = require("express");
const { index, find, create, update, destroy } = require("./controller");

const router = express();

router.get("/notes/:id", index);
router.get("/notesId/:id", find);
router.post("/notes", create);
router.put("/notes/:id", update);
router.delete("/notes/:id", destroy);

module.exports = router;
