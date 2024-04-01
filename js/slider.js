let currentIndex = 0;

document.querySelector('.prev-button').addEventListener('click', () => {
   navigate(-1);
   startAutoplay();
});

document.querySelector('.next-button').addEventListener('click', () => {
   navigate(1);
   startAutoplay();
});

function navigate(direction) {
   const galleryContainer = document.querySelector('.gallery-container');
   const totalImages = document.querySelectorAll('.gallery-container__gallery-item').length;

   currentIndex = (currentIndex + direction + totalImages) % totalImages;
   const offset = -currentIndex * 100;

   galleryContainer.style.transform = `translateX(${offset}%)`;
}

let autoplayInterval = null;

function startAutoplay() {
   stopAutoplay();
   autoplayInterval = setInterval(() => {
      navigate(1);
   }, 5000);
}

function stopAutoplay() {
   clearInterval(autoplayInterval);
}
startAutoplay(3000);
