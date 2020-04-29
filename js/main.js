$(document).ready(function () {
    $(window).scroll(function () { 
        if($("html").scrollTop() >= 45){
            $("#navigation .navbar").addClass("scrolled");
        }else{
            $("#navigation .navbar").removeClass("scrolled");
            
        }
    });  
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:6,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
});
   

   