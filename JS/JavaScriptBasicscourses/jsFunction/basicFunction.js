// Basic funciton Syntax

// function funcitonName(){
//     do something Here....
// }

// funciton with arguements syntax

// function functionName(arg1,agr2,...){
//     do something with arg1, arg2...
// }

// for example
// function greeting(user = 'Tuan') {
//   console.log(`hello ${user}`);
// }

// greeting('Nam Anh');

let array =  [1,2,3,4]

function sumArray(...args){
    console.log(typeof(args[0][0]))
}

sumArray(array)

let days = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wdenesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  7: 'Sunday',
};
function returnDay(number) {
    console.log(days[number])
  return number === days[number] ? console.log(days[number]) : null;
}

returnDay(9)