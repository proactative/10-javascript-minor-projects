const inputElement = document.querySelector('.input');
inputElement.checked = false;
const cardElement = document.querySelector('.toggle');
const titleElement = document.querySelector('.toggle__title');

function updateBody() {
  if (inputElement.checked) {
    cardElement.style.backgroundColor = '#dcdde1';
    titleElement.style.color = '#000';
  } else {
    cardElement.style.backgroundColor = '#222';
    titleElement.style.color = 'greenyellow';
  }
}
inputElement.addEventListener('input', updateBody);
