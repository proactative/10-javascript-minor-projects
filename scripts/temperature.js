const celcius = document.querySelector('.temperature__input_celsius');
const fahrenheit = document.querySelector('.temperature__input_fahrenheit');

celcius.addEventListener('input', () => {
  const output = (parseFloat(celcius.value * 9 / 5))+ 32;
  fahrenheit.value = parseFloat(output.toFixed(2));

})

fahrenheit.addEventListener('input', () => {
  const output = (parseFloat(fahrenheit.value) - 32) * 5 /9;
  celcius.value = parseFloat(output.toFixed(2));
  console.log(celcius.value);

  if(fahrenheit.value < 0) {
    fahrenheit.value = 0;
  }
})
