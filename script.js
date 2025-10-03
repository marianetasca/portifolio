
document.addEventListener('DOMContentLoaded', () => {
    const hamburguer = document.querySelector(".header .nav-bar .nav-list .hamburguer");
    const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
    const menu_item = document.querySelectorAll(".header .nav-bar .nav-list ul li a");
    const header = document.querySelector(".header.container");

    if (hamburguer && mobile_menu) {
        hamburguer.addEventListener("click", () => {
            hamburguer.classList.toggle('active');
            mobile_menu.classList.toggle('active');
        });
    }

    if (header) {
        document.addEventListener('scroll', ()=>{
            var scroll_positon = window.scrollY;
            if(scroll_positon > 350) {
                header.style.backgroundColor = '#061b2f';
            } else {
                header.style.backgroundColor = 'transparent';
            }
        });
    }

    if (menu_item && menu_item.length > 0 && hamburguer && mobile_menu) {
        menu_item.forEach(item=> {
            item.addEventListener('click', ()=> {
                // Garantir que o menu seja fechado (remoção explícita)
                hamburguer.classList.remove('active');
                mobile_menu.classList.remove('active');
            });
        });
    }

    // Fechar o menu ao clicar fora dele
    document.addEventListener('click', (e) => {
        const target = e.target;
        // se o menu não está aberto, não faz nada
        if (!mobile_menu.classList.contains('active')) return;

        // se o clique foi no hamburguer (botao) ou dentro do mobile_menu, não fecha
        if (hamburguer.contains(target) || mobile_menu.contains(target)) return;

        // caso contrário, fechar menu
        hamburguer.classList.remove('active');
        mobile_menu.classList.remove('active');
    });
});