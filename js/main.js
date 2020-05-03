$(document).ready(function () {
   
    $(window).scroll(function () { 
        if($("html").scrollTop() >= 45){
            $("#navgation .navbar").addClass("scrolled");
            $("#navgation .navbar.navbar-login").css("top", "0px");
            $("#navgation .navbar .nav-item .nav-link").css("color", "black");
            $("#navgation .navbar-brand  img").attr("src", "./image/logo-dark.png");
            $("#navgation .navbar .nav-moon a.nav-function i").css("color", "black");
        }else{
            $("#navgation .navbar").removeClass("scrolled");
            $("#navgation .navbar .nav-item .nav-link").css("color", "white");
            $("#navgation .navbar-brand  img").attr("src", "./image/logo-light.png");
            $("#navgation .navbar .nav-moon a.nav-function i").css("color", "white");
            $("#navgation .navbar.navbar-login").css("top", "45px");
            $("#navgation .navbar.navbar-login .nav-item .nav-link").css("color", "black");
            $("#navgation .navbar .nav-moon a.nav-function i.logini").css("color", "black");
            $("#navgation .navbar-brand  img").attr("src", "./image/logo-dark.png");
        }
       
    });  


   
    $('.owl-carousel').owlCarousel({
        items:6,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true
    });

    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    });

    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })

    $(".grid").isotope({
        itemSelector: ".category-item",
        layotMode : "fitRows",
    });

    $(".menu ul li").click(function(){
        $(".menu ul li").removeClass("active");
        $(this).addClass("active");
        var select = $(this).attr("data-filter");
        $(".grid").isotope({
            filter : select
        });
        return false
    });


    
    $(".shop-grid").isotope({
        itemSelector: ".shop-item",
        layotMode : "fitRows",
    });

    $(".menu .list-item li").click(function(){
        $(".menu ul li").removeClass("active");
        $(this).addClass("active");
        var select = $(this).attr("data-filter");
        $(".shop-grid").isotope({
            filter : select
        });
        return false
    });

    $(".modal-on").click(function(){
        $(".modal-container").css("display","block")
    });
    $(".close-icon").click(function(){
        $(".modal-container").css("display","none")
    })

    
});
   

   