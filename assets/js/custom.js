

$(document).ready(function () {


  $('#contrastId').click(function(e){
    e.preventDefault()
    $('body').toggleClass('contrast')
  });

  $('#increaseFont').click(function(e){
    e.preventDefault()
    modifyFontSize('html','increase');
  });
  $('#decreaseFont').click(function(e){
    e.preventDefault()
    modifyFontSize('html','decrease')
  });


  function modifyFontSize(MyElement,flag){

    var HtmlElement = $(MyElement);
    var currentFontSize = parseInt (HtmlElement.css('font-size'));
    
    if (flag =='increase' & currentFontSize < 12 )
        currentFontSize += 1;
    else if (flag == 'decrease' & currentFontSize >= 9 )
        currentFontSize -= 1;
    else if (flag == 'reset')
    currentFontSize = 10;

    HtmlElement.css('font-size', currentFontSize);

    // console.log(currentFontSize);

  }



    // swiper home banner
    let swiper = new Swiper(".homeSwiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


      let swiper5 = new Swiper(".tourismSwiper", {
        slidesPerView: 3.8,
        centeredSlides: true,
        spaceBetween: 30,
        initialSlide: 2,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          700: {
            slidesPerView: 3.8,
            spaceBetween: 30,
            centeredSlides: true,
            initialSlide: 2,
          },
          // when window width is >= 640px
         
        },

      });
});












// contact us toggle btn

$('.contact-toggle').click(function(){
  $(this).toggleClass("show");
});


// fancybox 
if( $('.fancybox').length )   {
  Fancybox.bind("[data-fancybox]", {
    // Transition effect when changing gallery items
    Carousel: {
      transition: "slide",
    },
    // Disable image zoom animation on opening and closing
    Images: {
      zoom: false,
    },
    // Custom CSS transition on opening
    showClass: "f-fadeIn",
   });
}
