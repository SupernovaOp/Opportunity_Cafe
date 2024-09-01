document.addEventListener('DOMContentLoaded', () => {
  // Initialize Locomotive Scroll
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });

function videoconAnimation() {
    const video = document.querySelector('#myVideo');
    const videocon = document.querySelector('#video-container');
    const playbutton = document.querySelector('#play');
    const buttonWidth = playbutton.offsetWidth / 2;
    const buttonHeight = playbutton.offsetHeight / 2;

    videocon.addEventListener('mouseenter', () => {
      gsap.to(playbutton, {
        scale: 1,
        opacity: 1
      });
    });

    videocon.addEventListener('mouseleave', () => {
      gsap.to(playbutton, {
        scale: 0,
        opacity: 0
      });
    });

    videocon.addEventListener('mousemove', (dets) => {
      gsap.to(playbutton, {
        left: dets.x - buttonWidth,
        top: dets.y - buttonHeight,
      });
    });

    playbutton.addEventListener('click', () => {
      video.controls = true;
      video.muted = false;
      video.play();
      playbutton.style.display = 'none'; // Hide the play button after playing
    });
}
videoconAnimation();

function loadingAnimation() {
    gsap.from('#page1 h1', {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.8,
      stagger: 0.2
    });

    // gsap.from('#page1 #video-container', {
    //   scale: 0.7,
    //   opacity: 0,
    //   delay: 1.5,
    //   duration: 1
    // });
}
loadingAnimation();

function cursor(){
  document.addEventListener("mousemove",(dets)=>{
    gsap.to('#cursor',{
      left : dets.x,
      top: dets.y
    })
  })
}
cursor();

function popUp(){
  const detsElements = document.querySelectorAll('.dets');

  detsElements.forEach(dets => {
    const popupMenu = dets.nextElementSibling; // Assuming popup-menu is the next sibling

    const showMenu = () => {
      popupMenu.style.display = 'flex'; // Show the menu
    };

    const hideMenu = () => {
      popupMenu.style.display = 'none'; // Hide the menu
    };

    dets.addEventListener('mouseover', showMenu);
    popupMenu.addEventListener('mouseleave', hideMenu); // Changed to hide on leave of popup-menu
  });
}
popUp();

function scrollto(){
  document.querySelector('a[href="#page2"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor link behavior
    scroll.scrollTo(document.querySelector('#page2'));
  });
    document.querySelector('a[href="#page4"]').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor link behavior
    scroll.scrollTo(document.querySelector('#page4'));
  });
  document.querySelector('#shop').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor link behavior
    scroll.scrollTo(document.querySelector('#page2'));
  });
}
scrollto();  
  
 
function donate(){
    const donateButton = document.querySelector('#page5 #real2 a');
    donateButton.addEventListener('click', (event) => {
      event.preventDefault();
      document.body.classList.add('fade-out'); 
      setTimeout(() => {
        window.location.href = donateButton.href; 
      }, 500); 
    }); 
}
donate();

function imageSlider(){
  let currentSlide = 0;
  let direction = 1; // 1 for forward, -1 for backward
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

function goToSlide(slideIndex) {
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const slideWidth = slides[0].clientWidth;
  sliderWrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function nextSlide() {
  currentSlide += direction;
  if (currentSlide >= totalSlides || currentSlide < 0) {
    direction *= -1; 
    currentSlide += direction; 
  }
  
  goToSlide(currentSlide);
}
setInterval(nextSlide, 3000);
}
imageSlider();

});


function handleMapClick() {
  const destination = "Opportunity Cafe and Co Works, 158, Dum Dum Rd, Ghosh Para, Dum Dum, Kolkata, West Bengal 700074"; 
  const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
  window.open(url, '_blank');
}

function handlePhoneClick() {
  const phoneNumber = "+918336858723"; // Replace with the actual phone number
  window.location.href = `tel:${phoneNumber}`;
}





