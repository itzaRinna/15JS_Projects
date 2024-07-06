// traversing the dom

const btns = document.querySelectorAll('.question-btn');

btns.forEach((button)=>{
    button.addEventListener('click', (e) => {
        const quest = e.currentTarget.parentElement.parentElement;
        quest.classList.toggle('show-text');
    });
});