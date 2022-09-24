const input = document.querySelector('.password__input');
const passwordButton = document.querySelector('.password__button');

passwordButton.addEventListener('click', () => {
  if(input.classList.contains('password__input_hidden')) {
 input.setAttribute('type', 'text');
 input.classList.add('password__input_shown');
 input.classList.remove('password__input_hidden');
 passwordButton.textContent = 'hide';
  } else {
    input.setAttribute('type', 'password');
 input.classList.add('password__input_hidden');
 input.classList.remove('password__input_shown');
 passwordButton.textContent = 'show';
  }
})
