$(document).ready(function () {
    $('#nav-toggler, .nav-link, .mode').click(function () {
        $("#nav-links").toggleClass('open');
        $("#menu").toggleClass("close");
        $(".line").toggleClass('white');
        $(".hamburger-btn").toggleClass('fixed');
    });
});