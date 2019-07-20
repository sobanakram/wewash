function toggleMobileNav() {
    var toggleBtn = $("#navToggleBtn");
    var nav = document.getElementById("mobileNav");
    if (nav.style.transform !== "translateX(-100%)" || nav.style.transform === "") {
        nav.style.transform = "translateX(-100%)";
        toggleBtn.toggleClass("collapsed");
    } else {
        nav.style.transform = "translateX(0%)";
        toggleBtn.toggleClass("collapsed");
    }
}

$(document).ready(function () {

    let navbarLink = $(".navbar-nav a");
    navbarLink.filter(function () {
        return this.href == location.href;
    }).parent().addClass("active").siblings().removeClass("active");
    navbarLink.click(function () {
        $(this).parent().addClass("active").siblings().removeClass("active");
    });

    var toggleBtn = $("#navToggleBtn");
    toggleBtn.click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        toggleMobileNav();
    });

    $(".mobile-nav-item a").click(function () {
        toggleMobileNav();
    });

    let packageButton = $(".package-btn button");
    packageButton.click(function (e) {
        packageButton.removeClass("active-btn");
        if (e.target.textContent == 2)
            $('.package-btn button.btn2').addClass("active-btn");
        else if (e.target.textContent == 3)
            $('.package-btn button.btn3').addClass("active-btn");
        else
            $(this).addClass("active-btn");
        $(".image-slider").slick("slickGoTo", parseInt(e.target.textContent) - 1, false);
    });

    $(".nav-item").click(function () {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });

    $(".card-header").click(function (e) {
        $(this).toggleClass("selected-accordion");
        $(".card-header").not(this).removeClass("selected-accordion").addClass("unselected-accordionn");
    });

    $(".slider-items").slick({
        arrows: true,
        dots: true,
        prevArrow: "<img class='slick-prev' src='images/left_arrow.svg'>",
        nextArrow: "<img class='slick-next' src='images/right_arrow.svg'>"
    });

    $(".image-slider").on("click", function (e) {
        $(".package-btn button").removeClass("active-btn");
        $(`.btn${ parseInt(e.target.textContent) }`).addClass("active-btn");
    });

    $(".image-slider").slick({
        dots: true,
        arrows: false
    }).on("setPosition", function (event, slick) {
        slick.$slides.css("height", slick.$slideTrack.height() + "px");
    });

});
