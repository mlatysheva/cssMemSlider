const bullets = document.querySelectorAll('.slider-bullet');
const memText = document.getElementById('mem-text');
const currentIllustration = document.getElementById('current-illustration');
const imageArray = ['./assets/mem-slider-0.png', './assets/mem-slider-1.png', './assets/mem-slider-2.png',
'./assets/mem-slider-3.png'];
const proverbsArray = ['Молод - гложи кости, а стар - ешь кашу.', 'Локоть близко, да не укусишь.', 'Сшито на одного, так на двоих не наденешь.', 'Федул всех надул, а Фетис на суку повис.']

// change images by clicking on the bullets
bullets.forEach((bullet, index) => {
  bullet.addEventListener('click', () => {
    currentIllustration.src = `${imageArray[index]}`;
    memText.innerHTML = `${proverbsArray[index]}`;
    bullets.forEach((element) => {
      element.classList.remove("active")
    })
    bullet.classList.toggle("active");
  });
});