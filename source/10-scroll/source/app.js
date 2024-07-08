const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    if(!linksContainer.classList.contains("show-links")){
        linksContainer.classList.add("show-links");
    }
    else{
        linksContainer.classList.remove("show-links");
    }
});