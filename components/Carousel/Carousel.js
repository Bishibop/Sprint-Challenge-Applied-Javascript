/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const imageUrls = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg" 
];

let carouselContainerEl = document.querySelector('.carousel-container');
carouselContainerEl.appendChild(buildCarousel(imageUrls));


function buildCarousel(imageUrls) {
  let carouselEl = document.createElement('div');
  carouselEl.classList.add('carousel');

  let leftButtonEl = document.createElement('div');
  leftButtonEl.classList.add('left-button');
  leftButtonEl.style.zIndex = 1000;

  let imageEls = imageUrls.map(imageUrl => {
    let imageEl = document.createElement('img');
    imageEl.src = imageUrl;
    imageEl.style.position = 'absolute';
    imageEl.style.display = 'none';
    return imageEl;
  });
  imageEls[0].style.display = 'inline';

  let rightButtonEl = document.createElement('div');
  rightButtonEl.classList.add('right-button');
  rightButtonEl.style.zIndex = 1000;

  [leftButtonEl, ...imageEls, rightButtonEl].forEach(element => {
    carouselEl.appendChild(element);
  });

  let imageIndex = 0;

  leftButtonEl.addEventListener('click', event => {
    let newIndex = imageIndex;
    if ((imageIndex - 1) >= 0) {
      newIndex = imageIndex - 1;
    } else {
      newIndex = imageIndex + 3;
    }
    let currentImage = imageEls[imageIndex];
    let newImage = imageEls[newIndex];
    gsap.to(currentImage, {
      duration: 1,
      right: 1200,
      onComplete: () => {
        currentImage.style.display = 'none';
        currentImage.style.right = null;
        currentImage.style.left = null;
      }
    });
    newImage.style.display = 'inline';
    imageIndex = newIndex;
  });

  rightButtonEl.addEventListener('click', event => {
    let newIndex = imageIndex;
    if ((imageIndex + 1) <= 3) {
      newIndex = imageIndex + 1;
    } else {
      newIndex = imageIndex - 3;
    }
    let currentImage = imageEls[imageIndex];
    let newImage = imageEls[newIndex];
    gsap.to(currentImage, {
      duration: 1,
      left: 1200,
      onComplete: () => {
        currentImage.style.display = 'none';
        currentImage.style.right = null;
        currentImage.style.left = null;
      }
    });
    newImage.style.display = 'inline';
    imageIndex = newIndex;
    // imageEls[imageIndex].style.display = 'none';
    // if ((imageIndex + 1) <= 3) {
    //   imageIndex += 1;
    // } else {
    //   imageIndex -= 3;
    // }
    // imageEls[imageIndex].style.display = 'block';
  });

  return carouselEl;
}
