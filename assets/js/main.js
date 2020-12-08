$(document).ready(function(){
 	/* =================================
    NAVBAR 
    =================================== */
    let windows = $(window);
    let sticky = $('.menu');
    if(window.innerWidth <= 578){
        sticky.removeClass('is-sticky');
    }else{
    windows.on('scroll', function() {
        var scroll = windows.scrollTop();
        if (scroll < 300) {
            sticky.removeClass('is-sticky');
        }else{
            sticky.addClass('is-sticky');
        }
    });
    }
})