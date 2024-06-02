$(document).ready(function(){

    // latest case slider
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
      });
    
    // url click
    $('.url').click(function(){
      $('.url').css("border-bottom","2px solid var(--primary)")
    });

    // email click
    $('.email').click(function(){
      $('.email').css("border-bottom","2px solid var(--primary)")
    });

});