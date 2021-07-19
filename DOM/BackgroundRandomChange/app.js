const btns = document.querySelectorAll('#btn-color-change');

const changeRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  let randomColor = `rgb(${r},${g},${b})`;

  return `rgb(${r},${b},${g})`;
};

// for (let btn of btns) {
//   btn.addEventListener('click', () => {
//     btn.style.backgroundColor = changeRandomColor();
//   });
// }

for (let btn of btns) {
  btn.addEventListener('click', colorize);
}

function colorize() {
  this.style.backgroundColor = changeRandomColor();
  this.style.color = changeRandomColor();
}
// using this to avoid alot of same code
