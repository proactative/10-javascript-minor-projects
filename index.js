const hoursItem = document.querySelector('#clock__hours');
const minutesItem = document.querySelector("#clock__minutes");
const secondsItem = document.querySelector("#clock__seconds");

//https://github.com/kaizhelam/Digital-Clock/blob/main/script.js
function setCurrentTime() {
  //получаем данные с компьютера
  let currentHours = new Date().getHours();
  let currentMinutes = new Date().getMinutes();
  let currentSeconds = new Date().getSeconds();

  hoursItem.innerText = currentHours;
  minutesItem.innerText = currentMinutes;
  secondsItem.innerText = currentSeconds;

  //добавляем '0' в случае однозначного числа
  if (currentHours < 10) {
    currentHours = '0' + currentHours;
  } else {
    currentHours = currentHours;
  }

  if (currentMinutes < 10) {
    currentHours = '0' + currentMinutes;
  } else {
    currentMinutes = currentMinutes;
  }
  /*
     if(currentSeconds < 10) {
      currentSeconds = '0' + new Date().getSeconds();
     } else {
      currentSeconds = currentSeconds;
     }*/

  currentSeconds = currentSeconds < 10 ? '0' + currentSeconds : currentSeconds;


  //обновляем каждую секунду
  setTimeout(() => {
    setCurrentTime()
  }, 1000)
}

setCurrentTime();
//console.log(hoursItem);

/* h = h < 10 ? "0" + h : h;*/

/*toggle*/
const inputElement = document.querySelector('.input');
inputElement.checked = false;
const cardElement = document.querySelector('.toggle');
const titleElement = document.querySelector('.toggle__title');

function updateBody() {
  if (inputElement.checked) {
    cardElement.style.backgroundColor = '#222';
    titleElement.style.color = '#fff';
  } else {
    cardElement.style.backgroundColor = 'greenyellow';
    titleElement.style.color = '#000';
  }
}
inputElement.addEventListener('input', updateBody);


/*counter*/
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
  box.style.backgroundColor = '#e84118';
 } else {
  box.style.backgroundColor = '#fff';
 }
}
