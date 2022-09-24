const figure = document.querySelector('.progress__figure');
let figureNumber = 0;

setInterval(() => {
  if (figureNumber = 73) {
    clearInterval();
  } else {
    figureNumber++;
    figure.innerHTML = figureNumber + '%';
  }
}, 50);

