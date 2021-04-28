
$('.toggle-nav').click(function() {
    $('.home__navbar').toggleClass('openNavBar');
    $('.toggle-nav').toggleClass('openNavBar');
    $('body').toggleClass('fixedPage');
});

$(document).click(function(e) {
    const closeHomeNav = $('.toggle-nav');
    const navList = $('.nav-item');
    if(!closeHomeNav.is(e.target)&&!navList.is(e.target)) {
        $('.home__navbar').removeClass('openNavBar');
        $('.toggle-nav').removeClass('openNavBar');
        $('body').removeClass('fixedPage');
    }
})

$(document).ready(function(){
    $('.works__gal').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'linear',
        dots: true,
        fade:true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
  });

$(document).ready(function(){
    $('.team-container-slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'linear',
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnFocus:true,
        responsive:[
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2, 
                    centerMode: false,
                }             
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }             
            }
        ]

    });
  });