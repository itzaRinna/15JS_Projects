import { menu } from './index.js'

const sectCenter = document.querySelector('.section-center');
const container = document.querySelector(".btn-container");

window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
  displayMenuButtons();
});


function displayMenuItems (menuItems){
  let displayMenu = menuItems.map((item) => {
    return ` 
      <article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title}>
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4> 
          </header>
          <p class="item-text">${item.desc}</p>
        </div>
      </article>
    `
  });
  displayMenu = displayMenu.join("");
  sectCenter.innerHTML = displayMenu
};

function displayMenuButtons(){
  const categories = menu.reduce(
    function(values, item){
      if(!values.includes(item.category)){
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories.map(function(category){
    return `
      <button class="filter-btn" type="button" data-id=${category}>
        ${category}
      </button>
    `
  }).join("");
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((menuItem)=>{
        if(menuItem.category === category){
          return menuItem;
        }
      });
      if(category === 'all'){
        displayMenuItems(menu);
      }
      else{
        displayMenuItems(menuCategory);
      }
    });
  });
}