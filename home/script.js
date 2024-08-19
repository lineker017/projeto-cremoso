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

let currentSlide = 0

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-item")

  if(index >= slides.length) {
    currentSlide = 0
  } else if(index < 0) {
    currentSlide = slides.length - 1
  } else {
    currentSlide = index
  }

  const offset = -currentSlide *100
  document.querySelector(".carousel-content").style.transform = `translateX(${offset}%)`
}

function nextSlide() {
  showSlide(currentSlide +1)
}

function prevSlide() {
  showSlide(currentSlide -1)
}


