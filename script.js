
const hamburguer = document.querySelector(".header .nav-bar .nav-list .hamburguer");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(".header .nav-bar .nav-list ul li a");
const header = document.querySelector(".header.container");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

document.addEventListener('scroll', ()=>{
    var scroll_positon = window.scrollY;
    if(scroll_positon > 350) {
        header.style.backgroundColor = '#061b2f';
    } else {
        header.style.backgroundColor = 'transparent';
    }
})
menu_item.forEach(item=> {
    item.addEventListener('click', ()=> {
        hamburguer.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});