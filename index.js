const hoursItem = document.querySelector('#clock__hours');
const minutesItem = document.querySelector("#clock__minutes");
const secondsItem = document.querySelector("#clock__seconds");


function setCurrentTime()  {
    //получаем данные с компьютера
    let currentHours = new Date().getHours();
    let currentMinutes = new Date().getMinutes();
    let currentSeconds = new Date().getSeconds();

    hoursItem.innerText = currentHours;
    minutesItem.innerText = currentMinutes;
    secondsItem.innerText = currentSeconds;

   //добавляем '0' в случае однозначного числа
   if(currentHours < 10) {
    currentHours = '0' + currentHours;
   } else {
    currentHours = currentHours;
   }

   if(currentMinutes < 10) {
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
    setTimeout(()=> {
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
    if(inputElement.checked) {
        cardElement.style.backgroundColor = '#222';
        titleElement.style.color = '#fff';
    } else {
        cardElement.style.backgroundColor = 'greenyellow';
        titleElement.style.color = '#000';
    }
}
inputElement.addEventListener('input', updateBody);
