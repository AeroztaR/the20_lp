'use strict';

$(document).ready(function(){

    $('.quote__slider').slick({
        infinite: true,
        dots: true,
        autoplay: true,
    });
    
    $('a[href^="#"]').on('click.smoothscroll', function(){
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top;
        $('body, html').animate({scrollTop: bl_top}, 1000);
        return false;
    });

});

const doc = document;

let hamburgerButton = doc.querySelector('.hamburger__button'),
    mobileNav = doc.querySelector('.nav-mobile'),
    mobileClose = doc.querySelector('.nav-mobile__close');

function openMobile() {
    mobileNav.classList.add('open');
}

function closeMobile() {
    mobileNav.classList.remove('open');
}

hamburgerButton.addEventListener('click', () => {
    if (mobileNav.classList.contains('open')) {
        closeMobile();
    } else {
        openMobile();
    }

});
mobileClose.addEventListener('click', closeMobile);