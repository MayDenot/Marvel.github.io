
//SECCION PERSONAJES

// FUNCION PARA EL CARRUSEL, SU TMÑ, CANTIDAD Y BOTONES
var swiper = new Swiper(".slide-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    spacePerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    //BREAKPOINTS PARA EL CARRUSEL 
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      365: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      }
    }
});


//SECCION MOVIES AND SERIES

//VARIABLES
const fullImgBox = document.getElementById("fullImgBox");
fullImg = document.getElementById("fullImg");

//FUNCION PARA ABRIR LA FULL IMG
function openFullImg(reference) {
  fullImgBox.style.display ="flex";
  fullImg.src = reference;
}

//FUNCION PARA CERRAR LA FULL IMG
function closeImg() {
  fullImgBox.style.display ="none";
}

//EVENTO PARA QUE SE PUEDA CERRAR LA FULL IMG CON EL "Escape"
window.addEventListener("keyup", function(e){
    if(e.key == 'Escape') {
      document.getElementById("fullImgBox").style.display ="none";
  }
});
