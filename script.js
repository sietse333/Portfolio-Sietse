let slideIndex = 0;

showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000);
}

const button = document.getElementById("mijKnop")
const poppetje = document.getElementById("poppetje")
const arm = document.getElementById("arm")
var peek = new Audio('./mp3/peek.mp3');
var woosh = new Audio('./mp3/wooshes.mp3');
peek.volume = 0.4
woosh.volume = 0.3

button.addEventListener("click", function () {
  peek.play();
  setTimeout(function () {
    woosh.play();
  }, 1000)
  poppetje.classList.add("poppetje-animatie");
  arm.classList.add("arm-animatie");
  button.style.display = "none";
});

