$(document).ready(function() {
    
    /* this code controls sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    })
    
    
    /*Navigation scroll */
    $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
    });
        
    /* Animation on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    })
    
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    })
        
        
    $('.js--wp-3').addClass('animated pulse');

    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '70%'
    })    
    
    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeInLeft');
    }, {
        offset: '70%'
    })
    
    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
            
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
            
        }
    })
    
        
    });
    
    /* LightGallery */
    $("#lightgallery").lightGallery(); 
    
    
    /* Google maps plugin */
    var map  = new GMaps({
        div: '#map',
        maptype: 'SATELLITE',
        lat: 49.2097562, 
        lng: 20.9290325,
        zoom: 13
    });
    
    map.addMarker({
      lat: 49.2097562,
      lng: 20.9290325,
      title: 'Spiaci mních',
        infoWindow: {
        content: '<p>Spiaci mních</p>'
        }
    });
    
    $(".email-adress").hide();
    $(".email").on("click", function(){
        $(".email-adress").toggle();
    });
    
} )