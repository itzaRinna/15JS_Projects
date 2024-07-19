import { text } from './index.js';

const form = document.querySelector('.lorem-form');
const amount = document.getElementById('amount');
const result = document.querySelector('.lorem-text');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * text.length)
    if(isNaN(value) || value <= 0 || value > 9){
        result.innerHTML = `<p class="result">${text[random]}</p>`
    }
    else{
        let tempText = text.slice(0,value);
        tempText = tempText.map((item)=>{
            return `<p class="result">${item}</p>`;
        }).join("");
        result.innerHTML = tempText;
    }
});