/*global $ */
(function ($) {
    "use strict";

    // Pre Loading 
    window.onpaint = preloadFunc();
    function preloadFunc() {
        // $('body').addClass('stopScroll');
    }
    
    // Loader 
    // $(window).on('load', function () { 
    //     setTimeout(function () {
    //         $('.loader').fadeOut(2000, function () {
    //             $('body').removeClass('stopScroll');
    //             $(this).remove();
    //         }); 
    //     },1000);   
    // });

    // // sticky navbar
    // let viewHeight = window.innerHeight + 100;
    // $(window).on('scroll',function () {
    //    $(window).scrollTop() > viewHeight ? $('.navWrapper').addClass('sticky') : $('.navWrapper').removeClass('sticky');
    // });

    // OPEN SIDE  MENU 
    $('.menuBtn').on('click', function () {
        $('.navMenu').toggleClass('show');
        $('.bodyOverlay').addClass('show');
        setTimeout(function () {
            $('body').addClass('stopScroll');
        }, 100);
    });

    // CLOSE SIDE MENU 
    $('.bodyOverlay').on('click', function () {
        $(this).removeClass('show');
        $('.navMenu').removeClass('show');
        $('body').removeClass('stopScroll');
    });

    let RTL = $('body').hasClass('ar') ? true : false;

    $('.owl-header').owlCarousel({
        rtl:  RTL,
        loop:true,
        margin:10,
        nav:true,
        autoplay: true,
        navText: ['<i class="icofont-rounded-left"></i>' ,'<i class="icofont-rounded-right"></i>'],
        dots: true,
        responsive:{
            0:{
                items:1,
                dotsEach: 1
            },
            600:{
                items:1,
                dotsEach: 1
            },
            1000:{
                items:1,
                dotsEach: 1
            }
        }
    });

    $('.stores-owl').owlCarousel({
        rtl:  RTL,
        loop:true,
        autoplay: true,
        margin:30,
        nav:false,
        navText: ['<i class="icofont-rounded-left"></i>' ,'<i class="icofont-rounded-right"></i>'],
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2,
                stagePadding: 50,
            },
            1000:{
                items:2,
                stagePadding: 250,
            }
        }
    });

    $('.liked-stores-owl').owlCarousel({
        rtl:  RTL,
        loop:true,
        autoplay: true,
        margin:20,
        nav:false,
        navText: ['<i class="icofont-rounded-left"></i>' ,'<i class="icofont-rounded-right"></i>'],
        dots: false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4,
                stagePadding: 50,
            },
            1000:{
                items:6,
                stagePadding: 100,
            }
        }
    });


    // Count Down 
    let countDOwn = document.getElementsByClassName('count-down');
    if(countDOwn){

        // Loop for each Days Counter Down
        let dayCounterDown = 0 ;

        // loop for each Days Counter Down
        $('.count-down').each(function () {

            let This = $(this);

            let dataEnd = This.data('end'),
                dataEndText = This.data('end-text'),
                endDate = new Date(dataEnd),               
                countSecond = 1000,
                countMinute = countSecond * 60,
                countHour = countMinute * 60,
                countDay = countHour * 24,
                countTimer;

            dayCounterDown ++;

            function countDown() {
                let startDate = new Date(),
                    countInterval = endDate - startDate;
                    
                if (countInterval == 0) {
                    clearInterval(countTimer);
                    This.html('');
                    This.append('<h1>'+ dataEndText +'</h1>');
                    return;
                }

                let remainDays = Math.floor(countInterval / countDay),
                    remainHours = Math.floor((countInterval % countDay) / countHour),
                    remainMinutes = Math.floor((countInterval % countHour) / countMinute),
                    remainSeconds = Math.floor((countInterval % countMinute) / countSecond);

                    remainDays  = remainDays < 10 ? '0' +remainDays : remainDays;
                    remainHours = remainHours < 10 ? '0' +remainHours  : remainHours;
                    remainMinutes = remainMinutes < 10 ? '0' +remainMinutes  : remainMinutes;
                    remainSeconds = remainSeconds < 10 ? '0' +remainSeconds : remainSeconds;

                displayDayCountValues(remainDays ,remainHours , remainMinutes , remainSeconds);
            }

            function displayDayCountValues(remainDays ,remainHours , remainMinutes , remainSeconds) {
                let Templete = `<div class="count-down-block">
                                    <span class="count-day"> ${remainDays} </span>
                                    <h5> يوم </h5>
                                </div>
                                <div class="count-down-block">
                                    <span class="count-hours"> ${remainHours} </span>
                                    <h5> ساعة </h5>
                                </div>
                                <div class="count-down-block">
                                    <span class="count-minutes"> ${remainMinutes} </span>
                                    <h5> دقيقة </h5>
                                </div>
                                <div class="count-down-block">
                                    <span class="count-seconds"> ${remainSeconds} </span>
                                    <h5> ثانية </h5>
                                </div>`;
                This.html(Templete);
            }
            countTimer = setInterval(countDown, 1000);
        });
    }

    // init WOW Js
    new WOW().init();


})(jQuery);

