const primaryNav = document.querySelector(".primary-navigation")
const navToggle = document.querySelector(".mobile-nav-toggle")

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible")

    if(visibility === "false") {
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
})







// var hamburguerMenu = document.getElementById('hamburger-menu')
// var iconHamburguer = document.querySelector('img.icon-hamburguer')
// var iconCloseMenu = document.querySelector('img.icon-close')
// hamburguerMenu.addEventListener('click', clicar)
// function openMenu() {
//   //  hamburguerMenu.
// }

// function clicar(event){
//     if (iconCloseMenu.classList.contains('hidden')){ //Se o botão de fechar estiver oculto
//         iconHamburguer.classList.add('hidden')
//         iconCloseMenu.classList.remove('hidden')
//     }
//     else {
//         iconHamburguer.classList.remove('hidden')
//         iconCloseMenu.classList.add('hidden')
//     }
// }

// console.log(iconCloseMenu)