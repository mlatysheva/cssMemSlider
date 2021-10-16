const bullets = document.querySelectorAll('.bullet');
const memText = document.getElementById('mem-text');
const currentIllustration = document.getElementById('current-illustration');
const imageArray = ['./assets/mem-slider-0.png', './assets/mem-slider-1.png', './assets/mem-slider-2.png',
'./assets/mem-slider-3.png', './assets/mem-slider-4.png', './assets/mem-slider-5.png', './assets/mem-slider-6.png', 
'./assets/mem-slider-7.png'];
const proverbsArray = ['Молод - гложи кости, а стар - ешь кашу.', 'Локоть близко, да не укусишь.', 'Сшито на одного, так на двоих не наденешь.', 
'Федул всех надул, а Фетис на суку повис.', 'Ученому и книги в руки.', 'Ищет рукавицу, а она - за поясом.', 'Меньше жмурься, так больше увидишь.', 'Комар парню ногу отдавил.']

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