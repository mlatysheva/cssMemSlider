const bullets = document.querySelectorAll('.slider-bullet');
const welcomeContainer = document.getElementById('mems');
const imageArray = ['./assets/mem-slider-0.png', './assets/mem-slider-1.png', './assets/mem-slider-2.png',
'./assets/mem-slider-3.png'];

// change images by clicking on the bullets
bullets.forEach((bullet, index) => {
  bullet.addEventListener('click', () => {
    mems.style.backgroundImage = `url(${imageArray[index]})`;
    welcomeContainer.style.transition = "0.4s ease";
    bullets.forEach((element) => {
      element.classList.remove("active")
    })
    bullet.classList.toggle("active");
  });
});