console.log("starting app.js");

//const poniewaz nie modyfikujemy modulu
//built in module
const fs = require('fs');
const os = require('os');
//3rd party module
const _ = require('lodash');
//own module
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('true'));

var filteredArray = _.uniq(['Maciej', 1, 'Maciej']);
console.log(filteredArray);

// var res = notes.addNote();
// console.log(res);

// var sum = notes.add(9, -2);
// console.log(sum);

// var user = os.userInfo();
//
// //`Hello  ${user.username}!`     ---- ES6 functionality, templating
// fs.appendFile('greetings.txt', `Hello  ${user.username} and you are ${notes.age}!`, function (err) {
//   if (err) {
//     console.log('unable to wrote to file');
//   }
// });
