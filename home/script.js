//capturando valores no document
const menu = document.querySelector('#removeClass')
const removeClass = document.querySelector('#active')
const openMenu = document.querySelector('.openMenu')

//adicionando funçao para abrir o menu
menu.addEventListener('click', () => {
    removeClass.classList.remove('active')
    removeClass.classList.add('close')

    openMenu.classList.remove('close')
} )

