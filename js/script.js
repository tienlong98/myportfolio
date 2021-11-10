$(document).ready(function() {
    $(window).scroll(function() {

        if (this.scrollY > 400) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });



    var typed = new Typed(".typing", {
        strings: ["ウェブサイト開発者", "フロントエンド エンジニア"],
        typeSpeed: 200,
        backSpeed: 120,
        loop: true
    });
});