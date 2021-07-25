// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');

const ul = document.querySelector('#list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let product = form.elements.product;
  let qty = form.elements.qty;
  let newLi = document.createElement('li');
  newLi.innerHTML = `${product.value} - ${qty.value}`;
  ul.appendChild(newLi);
  product.value = '';
  qty.value = '';
});
