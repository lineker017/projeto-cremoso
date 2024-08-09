//capturando valores no document
const menuButton = document.querySelector("#removeClass");
const menuModal = document.querySelector(".openMenu");
const closeButton = document.querySelector(".openMenu button");

//adicionando funçao para abrir o menu
menuButton.addEventListener("click", () => {
  menuModal.classList.add("active");
});

//adicionando funçao de fechar o menu
closeButton.addEventListener("click", () => {
    menuModal.classList.remove("active");
});
