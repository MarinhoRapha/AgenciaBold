$('.container-slider').slick({
  dots: true,
  arrows:false,
  speed:1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover:false,
  responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }],
  });


  /* menu mobile com jquery

$('.menu-itens-mobile i').click(function(){
  $('.menu-mobile').slideToggle('.show-menu')
})

*/ 

const menuButton = document.querySelector('.menu-itens-mobile i')

menuButton.addEventListener('click', function(){
    let showMenu = document.querySelector('.menu-mobile')
    showMenu.classList.toggle('show-menu')
})