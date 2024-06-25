const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
    const randonNumber = getRandomNumber(); // get random number between 0 - 3 colors[3]
    console.log(randonNumber);
    document.body.style.backgroundColor = colors[randonNumber];
    color.textContent = colors[randonNumber];
});

getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
};

