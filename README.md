# Module 11 Challenge Express js Challenge Note Taker

  Built with:

  ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

> Live deployed URL: https://noketaker.herokuapp.com/notes

> Repository URL: https://github.com/ptrcao/11-Express-Relocate-All-To-Root.git

## Table of Contents

- [Project Description](#project-description)

## Project Description
This application uses the Express.js framework to create a REST API that allows clients to perform CRUD (create, read, update, delete) operations on notes stored in a JSON file. The API has three endpoints:

- `GET /notes` retrieves a list of all notes stored in the `db.json` file.
- `POST /notes` adds a new note to the list of notes stored in the `db.json` file. The new note data is passed in the request body as JSON.
- `DELETE /notes/:id` deletes a note from the list of notes stored in the `db.json` file. The ID of the note to delete is passed in the URL as a path parameter.

## Usage Notes
Sometimes the delete button can have a delayed action, but it has been tested and does work as recorded in the GIF demo below.  The user needs to click on the icon precisely and specifically, as missing the icon marginally on click can fail to see a response.  A future improvement could make the trash icon more foolproof and UI-friendly, but in this project, as is, the developer was only responsible for the backend.

## Screenshot

![Demo GIF](assets/Note%20Taker%20Demo.gif)

## Credits
- PC
