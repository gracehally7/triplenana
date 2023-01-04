let menu = document.querySelector('#bars');
let  navBar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
} 

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider",{
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination:{
        el: ".swiper-pagination",
        clickable:true,
    },
    loop:true,
});


var swiper = new Swiper(".review-slider",{
    spaceBetween:30,
    centeredSlides:true,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    
    loop:true,
    breakpoints: {
        0:{
            slidesPerView: 1,
        }
        600 :{
            slidesPerView: 2,
        }
        768 :{
            slidesPerView: 2,
        }
        1024 :{
            slidesPerView: 3,
        }
    }
});