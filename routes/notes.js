const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
  fs.readFile("db/db.json", "utf-8", (err, data) => {
    // console.log(data);
    if (err) throw err;
    let parsedData = JSON.parse(data);
    return res.json(parsedData);
  });
});

// Required for app.post('/api/notes', ...) routes
const uuid = require("uuid");
router.use(express.json());

router.post("/", (req, res) => {
  console.log("req is: " + JSON.stringify(req.body));

  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    const newNote = {
      id: uuid.v1(),
      title: req.body.title,
      text: req.body.text,
    };
    console.log(newNote);
    notes.push(newNote);
    fs.writeFile("db/db.json", JSON.stringify(notes), (err) => {
      if (err) throw err;
      res.json(newNote);
    });
  });
});

router.delete("/:id", (req, res) => {
  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    const updatedNotes = notes.filter((note) => note.id !== req.params.id);
    console.log(updatedNotes);
    fs.writeFile("db/db.json", JSON.stringify(updatedNotes), (err) => {
      if (err) throw err;
      res.json(updatedNotes);
    });
  });
});

module.exports = router;
