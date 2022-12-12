var hamburguerMenu = document.getElementById('hamburger-menu')
var iconHamburguer = document.querySelector('img.icon-hamburguer')
var iconCloseMenu = document.querySelector('img.icon-close')
hamburguerMenu.addEventListener('click', clicar)
function openMenu() {
  //  hamburguerMenu.
}

function clicar(event){
    if (iconCloseMenu.classList.contains('hidden')){ //Se o botão de fechar estiver oculto
        iconHamburguer.classList.add('hidden')
        iconCloseMenu.classList.remove('hidden')
    }
    else {
        iconHamburguer.classList.remove('hidden')
        iconCloseMenu.classList.add('hidden')
    }
}

console.log(iconCloseMenu)