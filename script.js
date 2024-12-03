let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

let videoBtn = document.querySelectorAll('.vid-btn');


Window.onscroll = () =>{
  searchBtn.classList.remove('fa-times');
  searchBar.classList.remove('active');
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  loginForm.classList.remove('active');




}

menu.addEventListener('click', () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');


})


searchBtn.addEventListener('click', () =>{
  searchBtn.classList.toggle('fa-times');
  searchBar.classList.toggle('active');
})

formBtn.addEventListener('click', () =>{
  loginForm.classList.add('active');
  
})

formClose.addEventListener('click', () =>{
  loginForm.classList.remove('active');
  
})

videoBtn.forEach(btn =>{
  btn.addEventListener('click', () =>{
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src = btn.getAttribute('data-src');
    document.querySelector('#video-slider').src = src;
  });
});


// swper code


// var swiper = new Swiper (".review-slider", {
//   spaceBetween: 20,
//   loop: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   breakpoints: {
//     640: {
//       sliderPerview: 1,

//     },
//     768: {
//       sliderPerview: 2,
//     },
//     1024: {
//       sliderPerview: 3,
//     },
//   },


 
// });



var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});


var swiper = new Swiper(".brand-slider", {

  spaceBetween: 30,
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
      spaceBetween: 20,
     
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
     
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
      
    },
  },
});



