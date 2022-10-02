let count = 0;

const box = document.querySelector('.counter__value-box');
const counterValue = document.querySelector('.counter__value');
const decrease = document.querySelector('.counter__button_type_minus');
const increase = document.querySelector('.counter__button_type_plus');
const reset = document.querySelector('.counter__button_type_reset');

decrease.addEventListener('click', function() {
  count--;
  counterValue.textContent = count;
  changeColor();
})

increase.addEventListener('click', function() {
  count++;
  counterValue.textContent = count;
  changeColor();
})

reset.addEventListener('click', function() {
  count = 0;
  counterValue.textContent = count;
  changeColor();
})

function changeColor() {
 if(count > 0) {
  box.style.backgroundColor = 'greenyellow';
 } else if (count < 0) {
  box.style.backgroundColor = '#e91e63';
 } else {
  box.style.backgroundColor = '#fff';
 }
}
