

$(document).ready(function() {
    $('.sneakers-conteiner').slick({
      arrows:true,
      dots:true,
      adaptiveHeight: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      speed: 1000,
      easing: 'ease',
      infinite: true,
      //initialSlide:0;
      autoplay: true,
      autoplaySpeed: 1500,
      //pauseOnFocuse: true,
      //pauseOnHover: true,
      //pauseOnDotsHover: true,
      draggable: false,

    });
})
