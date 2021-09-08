const p1btn = document.querySelector('#p1btn');
const p2btn = document.querySelector('#p2btn');
const resetbtn = document.querySelector('#reset');
let firstScore = document.querySelector('#firstScore');
let secondScore = document.querySelector('#secondScore');
let winningScoreSelect = document.querySelector('#selectedScore');

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
let winningScore = 0;

winningScoreSelect.addEventListener('change', function () {
  winningScore = parseInt(this.value);
});

p1btn.addEventListener('click', function () {
  console.log(winningScore);
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOver = true;
      firstScore.classList.add('winner');
    }
    firstScore.innerText = p1Score;
  }
});
p2btn.addEventListener('click', function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
      secondScore.classList.add('winner');
    }
    secondScore.innerText = p2Score;
  }
});

resetbtn.addEventListener('click', reset);


function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  firstScore.textContent = 0;
  secondScore.textContent = 0;
  firstScore.classList.remove('winner');
  secondScore.classList.remove('winner');
}
