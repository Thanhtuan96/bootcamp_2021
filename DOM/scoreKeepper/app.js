const p1btn = document.querySelector('#p1btn');
const p2btn = document.querySelector('#p2btn');
const resetbtn = document.querySelector('#reset');
let firstScore = document.querySelector('#firstScore');
let secondScore = document.querySelector('#secondScore');

let p1Score = 0;
let p2Score = 0;

p1btn.addEventListener('click', function () {
  p1Score += 1;
  firstScore.innerText = p1Score;
});
p2btn.addEventListener('click', function () {
  p2Score += 1;
  secondScore.innerText = p2Score;
});

resetbtn.addEventListener('click', function () {
  secondScore.innerText = 0;
  firstScore.innerText = 0;
});
