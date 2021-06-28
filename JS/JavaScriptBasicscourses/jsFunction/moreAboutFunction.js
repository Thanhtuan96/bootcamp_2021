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
// }

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
