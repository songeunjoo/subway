$(function(){

    $(".main_slider").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:5000,
        pauseOnHover:true,
        pauseOnFocus:false,
    });

    $(".main_slider figure").eq(1).addClass("on");
    $(".main_slider").on("afterChange", function(e,s,c){
        $(".main_slider figure").eq(c+1).addClass("on").siblings().removeClass("on");
    });



})