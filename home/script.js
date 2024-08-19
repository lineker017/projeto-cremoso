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

let currentSlideIndex = 0


function creatDots() {
  const slides = document.querySelectorAll(".carousel-item")
  const indicators = document.querySelector(".carousel-indicators")
  
  slides.forEach((_, index) => {
    const dot = document.createElement("span")
    dot.classList.add("dot")
    dot.setAttribute("onclick", `currentSlide(${index})`)
    indicators.appendChild(dot)
  });
}

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-item")
  const dots = document.querySelectorAll(".dot")
  
  if(index >= slides.length) {
    currentSlideIndex = 0
  } else if(index < 0) {
    currentSlideIndex = slides.length - 1
  } else {
    currentSlideIndex = index
  }

  dots.forEach((dot, i) => {
    dot.classList.remove("active")

    if(i === currentSlideIndex) {
      dot.classList.add("active")
    }
  })

  const offset = -currentSlideIndex *100
  document.querySelector(".carousel-content").style.transform = `translateX(${offset}%)`  
}

function nextSlide() {
  showSlide(currentSlideIndex +1)
}

function prevSlide() {
  showSlide(currentSlideIndex -1)
}

function currentSlide(index) {
  showSlide(index)
}

creatDots()
showSlide(0)





