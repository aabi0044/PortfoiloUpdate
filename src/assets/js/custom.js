$(function() {

    "use strict";

    var wind = $(window),
        containerE1 = document.querySelector('.mixing'),
        mixer = mixitup(containerE1);

    //scrollspy
    $('body').scrollspy({
        target: '.navbar',
        offset: 80
    });
    /***********************************************Preload******************************************************/

    $('.preloader').delay(200).fadeOut('slow');
    setTimeout(function() {
        //After 2s, the notscrolling class of the body will be removed
        $('body').removeClass('notscrolling');
    }, 500);

    /***********************************************Navbar*******************************************************/
    //show or hide the navbar
    wind.on('scroll', function() {
        if ($(this).scrollTop() < 300) {
            $("nav").removeClass("yasso-top-nav");
        } else {
            $("nav").addClass("yasso-top-nav");
        }
    });
    $('.navbar-nav .nav-link').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    /***********************************************Skills*******************************************************/
    var $bars = $(".bar"),
        methods = {
            init: function() {

                // Bind events
                methods.bindEvents();

            },
            bindEvents: function() {

                // Loop through each of the bars...
                $bars.each(function() {

                    var $bar = $(this),
                        $pct = $bar.find(".pct"),
                        data = $bar.data("bar");

                    setTimeout(function() {

                        $bar
                            .css("background-color", data.color)
                            .animate({
                                "width": $pct.html()
                            }, data.speed || 1500, function() {

                                $pct.css({
                                    "color": data.color,
                                    "opacity": 1
                                });

                            });

                    }, data.delay || 0);

                });

            }
        };

    // Initialize on page load
    methods.init();

    /*********************************************Portfolio******************************************************/
    $('.shuffle button').on("click", function() {
        "use strict";
        $(this).addClass('selected').siblings().removeClass('selected');
    });
    //magnific popup
    $('.mixing').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /*********************************************Stats*********************************************************/
    //counterUp
    $('.counter').counterUp({
        delay: 100,
        time: 3000
    });

    /********************************************Testimonials****************************************************/
    //Testimonials owlCarousel
    $("#testimonials .owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true
    });

    /*************************************************Blog*******************************************************/
    // Blog owlCarousel
    $('#blog .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: false,
        autoplay: true,
        smartSpeed: 500,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
});