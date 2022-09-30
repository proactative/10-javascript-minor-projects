const figure = document.querySelector('.progress__figure');
let figureNumber = 0;
/*
setInterval(() => {
  if (figureNumber = 73) {
    clearInterval();
  } else {
    figureNumber ++;
    figure.textContent = figureNumber + '%';
  }
}, 50);*/


setInterval(() => {
    figureNumber ++;
    figure.textContent = figureNumber + '%';
    if(figureNumber >= 73) {
      figure.textContent = '73%';
    }
}, 30);
