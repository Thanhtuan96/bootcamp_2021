// funtion scope
// variable 'visibility'
// The location where a variable is defined dictates where we have access to that variable

// function collectEggs(){
//     let totalEggs = 6;
//     console.log(totalEggs)
// }
// console.log(totalEggs)

// let radius = 8;
// if(radius > 0){
//     const PI = 3.14;

// }

//
// higher order funciton
//

// that operate on/with other functions.PI
// They can:
//  Accept other funciton as arguments
//  return a function

// for example

// function callTwice(func) {
//   func();
// }

// function rollDie() {
//   console.log(Math.floor(Math.random() * 6)+1);
// }+

// rollDie();

// function CallToRollDie(f,n){
//     for(let i = 0; i<= n; i++){
//         f()
//     }
// }

// CallToRollDie(rollDie,10)

function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log('Congrats, I am a good funciton!');
      console.log('you win a million dollars');
    };
  } else {
    prompt('try to close the browers');
  }
}

// defined method for function
// We can add functions as properties on objects.Math
// We call them methods

// for example

// const math = {
//   multiply: function (x, y) {
//     console.log(x * y);
//     return x * y;
//   },
//   divide: function (x, y) {
//     return x / y;
//   },
//   square: function (x) {
//     return x * x;
//   },
// };

// math.multiply(2, 3);

// shorthand
// We do this so often tat there's a new shorthand way of adding methods.

// const math = {
//   blah: 'Hi!',
//   add(x, y) {
//     return x + y;
//   },
//   multiply(x, y) {
//     return x * y;
//   },
// };

// keyword This in methods

// use the keyword this to access other properties on the same objects

// for example

const person = {
  first: 'Robert',
  last: 'Herjavec',
  fullName() {
    return `${this.first} ${this.last}`;
  },  
};


// Using Try/Catch
try {
    hello.toUpperCase();
}catch {
    console.log('errrorrrr!!!')
}