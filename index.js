
////// PRVNI UKOL POČÍTADLO



const valueElm = document.querySelector('.counter__value');
const btnUp = document.querySelector('.counter__up');
const btnDown = document.querySelector('.counter__down');


let value = 15;

const updateCounter = (value) => {
  valueElm.textContent = String(value).padStart(2, '0');
};

btnUp.addEventListener('click', () => {
  if (value < 99) {
    value = value + 1;
    updateCounter(value);
  }
});


btnDown.addEventListener('click', () => {
  if (value > 0) {
    value = value - 1;
    updateCounter(value);
  }
});

updateCounter(value);



////  DRUHÝ ÚKOL MINUTKA 


let form = document.querySelector(".controls");

let secondsRemaining = document.querySelector(".alarm__seconds");

let audio = document.getElementById("audio");


const prime = (event) => {
  event.preventDefault(); 

  let time = Number(document.querySelector('.time-input').value)
    
  const counter = () => {
    time -= 1
    secondsRemaining.textContent = time;
    
    if (time < 0) {
      audio.play();
      secondsRemaining.textContent = 0;
    }
  }
  

  const countdown = setInterval(counter, 1000);
}

form.addEventListener("submit", prime);