const Note = require("../models/Note");

exports.getNotes = async (req, res) => {
  const notes = await Note.find({ userId: req.user.id });
  res.json(notes);
};

exports.createNote = async (req, res) => {
  const { title, content } = req.body;
  const note = await Note.create({ title, content, userId: req.user.id });
  res.status(201).json(note);
};

exports.deleteNote = async (req, res) => {
  const { id } = req.params;
  await Note.findOneAndDelete({ _id: id, userId: req.user.id });
  res.status(204).end();
};
