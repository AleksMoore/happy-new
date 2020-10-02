$(function() {
    $('.partners__slides').owlCarousel({
        loop: true,
        items: 5,
        autoplay: true,
        autoplayTimeout:3000,
        responsive:{ 
            0:{ 
            items: 3 
            }, 
            485:{ 
            items: 3 
            }, 
            1200:{ 
            items: 5 
            } 
        }
    });
   });

$(function() {
    $('.reviews__slides').owlCarousel({
        loop: true,
        items: 2,
        nav: true,
        responsive:{ 
            0:{ 
            items: 1,
            nav: false
            }, 
            485:{ 
            items: 2,
            nav: false  
            }, 
            1200:{ 
            items: 2 
            } 
        }
    });
   });

$(function() {
    $('.info__slides').owlCarousel({
        loop: true,
        items: 2,
        nav: true,
        responsive:{ 
            0:{ 
            items: 1,
            nav: false  
            }, 
            485:{ 
            items: 2,
            nav: false 
            }, 
            1200:{ 
            items: 2 
            } 
        }
    });
   });

   $(document).ready(function() {
    $("a.header__link").click(function(){
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;
    });
   });