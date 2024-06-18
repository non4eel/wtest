/* 
// sticky header 
window.onscroll = function () { getSticky() };

const header = document.getElementById("header");
const sticky = header.offsetTop;

function getSticky() {
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
} 
*/

/* active menu item */
const currentLocation = location.href;
const menuItem = document.querySelectorAll('.nav-btn');
const menuLength = menuItem.length

for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].classList.add("btn-active");
    }
} 

/* carousel */

/* review count*/
const reviewCount = document.querySelector('.review');
let count = 0;

updateDisplay();

reviewCount.addEventListener("click", () => {
    count++;
    updateDisplay();
});


function updateDisplay() {
    reviewCount.innerHTML = 'Отзывы' + ' ' + count;
};

