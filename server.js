// This application uses the Express.js framework to create a REST API that allows clients to perform CRUD (create, read, update, delete) operations on notes stored in a JSON file. The API has three endpoints:

// - `GET /notes` retrieves a list of all notes stored in the `notes.json` file.
// - `POST /notes` adds a new note to the list of notes stored in the `notes.json` file. The new note data is passed in the request body as JSON.
// - `DELETE /notes/:id` deletes a note from the list of notes stored in the `notes.json` file. The ID of the note to delete is passed in the URL as a path parameter.


const express = require("express");
const path = require("path");



// const bootstrap = require('bootstrap')
// import 'bootstrap/dist/css/bootstrap.css';
const app = express();



const PORT = process.env.PORT || 80

// EJS (alternatively use Pug for dynamic HTML)
// https://www.youtube.com/watch?v=yXEesONd_54

// register view engine
// app.set("view engine", "ejs");
// inform ejs which is your views folder because you don't use the default folder name views, but rather 'public'
// app.set("views", path.join(__dirname,"public"));

app.use(express.static(path.join(__dirname,"public")));
// app.use(express.static(path.join(__dirname, "node_modules/bootstrap/dist")));


app.use('/notes',(req, res) => {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

// Include api_notes_router.js for the endpoint /api/notes
const apiNotesRouter = require('./routes/notes')
app.use('/api/notes', apiNotesRouter)

app.use('*',(req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
