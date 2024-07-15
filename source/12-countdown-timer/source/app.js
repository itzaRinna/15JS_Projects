import { months, weekdays } from './index.js'

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2024, 9, 25, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `Giveaway ends on ${weekday}, ${date} ${month}, ${year} ${hours}:${mins}am`;

const futureTime = futureDate.getTime();

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(t/oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let mins = Math.floor((t % oneHour) / oneMinute);
  let secs = Math.floor((t % oneMinute) / 1000);
  
  function format(item){
    if(item < 10){
      return item = `0${item}`;
    }
    return item;
  }
  const values = [days,hours,mins,secs];

  items.forEach((item, index)=>{
    item.innerHTML = format(values[index]);
  });
}

getRemainingTime();