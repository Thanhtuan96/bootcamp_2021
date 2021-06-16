// loop allow us to repeat code
// there are multiple types
// 1.for.. loops
// 2.while...loops
// 3.for...of loops
// 4.for...in loops

let i = 25;

do {
  let result = i;
  i -= 5;
  console.log(result);
} while (i >= 0);

// expected 25 20 15 10 5 0

const people = ['Tuan', 'Thanh', 'Park'];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase());
}

for (person of people) {
  console.log(person.toUpperCase());
}

for (let i = 1; i <= 10; i++) {
  console.log(`i is: ${i}`);
  for (let j = 1; j < 4; j++) {
    console.log(`      j is :${j}`);
  }
}

// writing guess game
