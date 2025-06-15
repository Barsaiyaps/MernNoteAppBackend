const express = require("express");
const router = express.Router();
const { getNotes, createNote, deleteNote } = require("../controllers/noteController");
const { authMiddleware } = require("../middlewares/authMiddleware");

router.use(authMiddleware); 

router.get("/", getNotes);
router.post("/", createNote);
router.delete("/:id", deleteNote);

module.exports = router;

