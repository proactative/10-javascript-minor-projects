const inputElement = document.querySelector('.input');
inputElement.checked = false;
const cardElement = document.querySelector('.toggle');
const titleElement = document.querySelector('.toggle__title');

function updateBody() {
  if (inputElement.checked) {
    cardElement.style.background = 'linear-gradient(90deg, greenyellow ,#e91e63)';
    titleElement.style.color = '#222';
  } else {
    cardElement.style.background = '#222';
    titleElement.style.color = 'greenyellow';
  }
}
inputElement.addEventListener('input', updateBody);
