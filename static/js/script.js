$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#topButtom').fadeIn();
        } else {
            $('#topButtom').fadeOut();
        }
    });
$('#topButtom').click(function() {
    $('body,html').animate({scrollTop:0},700);
    });
});

$(document).ready(function(){
    let link = $('.menu-link');
    let link_active = $('.menu-link_active');
    let menu = $('.menu');

    link.click(function() {
        link.toggleClass('menu-link_active');
        menu.toggleClass('menu_active');
    });
    link_active.click(function() {
        link.removeClass('menu-link_active');
    });
});

