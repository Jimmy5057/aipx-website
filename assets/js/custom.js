$( document ).ready(function() {
    new WOW({
        mobile: true
    }).init();

    var owl = $(".owl-carousel").owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots: false,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    $('.next').click(function() {
        owl.trigger('next.owl.carousel');
    })

    $('.prev').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    })

    $(".currentYear").text(new Date().getFullYear());
});