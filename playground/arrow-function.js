//ver 1
// var square = (x) => {
//   var result = x * x;
//   return result;
// };


//ver 2 (return by default)
//var square = (x) => x*x;

//with one argument we can skip parentesees
//we need them with 0, 2 or more arguments
var square = x => x*x;
console.log(square(9));

//1 line - expression
//2+ lines - statement


var user = {
  name: "Maciej",
  sayHi: () => {
    console.log(`Hi ${this.name}`);
  },
  sayHiAlt () {
    console.log(`Hi ${this.name}`);
  }
};

user.sayHiAlt();
