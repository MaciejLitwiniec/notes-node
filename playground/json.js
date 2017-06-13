// Process of taking an object and converting it into a string

// var obj = {
//   name: 'Maciej'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

//Process of taking a string and converting it into an object (ex. received by server);
//double quotes are JSON requirement, double quote also on keys
// var personString = '{"name":"Maciej", "age": 29}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);


const fs = require('fs');

var originalNote = {
  title: "Some title",
  body: "Some body"
};

//Stringifying object to string, then saving to file
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

//Reading from file to string, then parsing to object
var readNotes = fs.readFileSync('notes.json');
var note = JSON.parse(readNotes);

console.log(typeof note);
console.log(note.title);
