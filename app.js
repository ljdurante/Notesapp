
console.log("Starting app.js");

const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;
const express = require("express");
const routes = require ("./routes");

const ap = express();
app.use(express.static('public'));

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(routes);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];



if (command === "add") {
  console.log("adding note");
  notes.addingNote(title, body);
} else if (command === "remove") {
  console.log("removing note");
  notes.removeNote(title);
} else if (command === "read") {
  console.log("reading note");
  notes.readNote(title);
} else if (command === "list") {
  console.log("listing all notes");
  notes.getAll();
} else {
  console.log("Unknown command was used!");
}