// DOM - Document Object Model   <====== THAT'S THE MAIN ONE
// document ^ (документ це об'єкт(вся сторінка) в нього купа функцій)
// BOM - Browser Object Model
// window ^
// document.querySelector('selector css') // one element
// document.querySelectorAll('selector css') // array of elements

const clock = document.querySelector('.clock');
clock.innerHTML = new Date().toLocaleTimeString;