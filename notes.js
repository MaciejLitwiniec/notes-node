//console.log("starting nodes.js");

// to see what is inside module object - znajdziemy tam exports
// console.log(module);
// module.exports.age = 25;

//conversion of regular ES5 function to arrow function
// module.exports.addNote = () => {
//   console.log('addNote');
//   return 'New note';
// };

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    //before ES6 it would be title: title, body: body
    title,
    body
  };
  //ES6 arrow function notation, if there is only one statement in function we can simplify
  //function filter returns either true or false, we use anonymous callback function to check title
  var duplicateNotes = notes.filter((note) => note.title === title);

  //if lenght of duplicateNotes is longer than 0 we dont want to save the note
  if (duplicateNotes.length === 0){
    //pushing note to notes array and saving to file as a string
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};


var removeNote = (title) => {
  var notes = fetchNotes();
  //we save to new array only those items which doesnt match provided title
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  //checking whether note was actually removed by checking length (true or false)
  return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
  debugger;
  console.log('--');
  //ES6 template notation
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  //pre ES6 (property: value)
  //addNote: addNote
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}
