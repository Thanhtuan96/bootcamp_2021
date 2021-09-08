const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((num) => {
  console.log(num);
});

const clearnNames = (array) => {
  let newArray = array.map((item) => {
    return item.trim();
  });

  console.log(newArray);
};

clearnNames([' Tuan', 'Nam Anh', '  Park']);

// setTimeout and SetInterval
// console.log('Hello!!')
// setTimeout(()=>{
//     console.log('hello!!! Are you still there?')
// },3000)

// const radomNumber = setInterval(()=>{
//     console.log(Math.random()*9)
// },3000)

// clearInterval(randomNumber)

//Some & Every methods

// 1. The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

// 2. The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// for example

const words = ['dog', 'cat', 'hello', 'tommorow'];

const allEvens = (arrays) => {
  console.log(arrays.every((item) => item % 2 === 0));
};

allEvens([2, 4, 6, 8, 9]);

//reduce() method of arrays

// *) we can you reduce() method to find min or max value in array

// for example

const scores = [1, 2, 3, 4, 5, 6, 7, 78, 89, 9, 0.2, 4, 3, 3, 4];

let minScore = scores.reduce((min, score) => {
  return min > score ? score : min;
});
let maxScore = scores.reduce((max, score) => {
  return max < score ? score : max;
});

console.log(minScore); // expected 0.2 as a min number in array
console.log(maxScore); // expected 89 as a max number in array
