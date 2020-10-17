$(document).ready(function(){
    $(".icon-bg").click(function () {
        $(".btn").toggleClass("active");
        $(".icon-bg").toggleClass("active");
        $(".container").toggleClass("active");
        $(".box-upload").toggleClass("active");
        $(".box-caption").toggleClass("active");
        $(".box-tags").toggleClass("active");
        $(".private").toggleClass("active");
        $(".set-time-limit").toggleClass("active");
        $(".button").toggleClass("active");
    });

    $(".button").click(function () {
        $(".button-overlay").toggleClass("active");
    });

    $(".iconmelon").click(function () {
        $(".box-upload-ing").toggleClass("active");
        $(".iconmelon-loaded").toggleClass("active");
    });

    $(".private").click(function () {
        $(".private-overlay").addClass("active");
        $(".private-overlay-wave").addClass("active");
    });
    $(window).scroll(function () {
    $(".upper-header").css("background-position","0% " + ($(this).scrollTop() / 30 - 5   ) + "vh");

    $(window).scroll(function(){
        if($(window).scrollTop()>600){
            $('.skill').animate({
                marginRight: 25,
                marginLeft: 25,
                marginTop: 25,
                marginBottom:25,
                opacity:1,
            }, 1000, "linear")
            
        }
    })

    $(window).scroll(function(){
        if($(window).scrollTop()>1400){
            $('.work').animate({
                marginRight: 25,
                marginLeft: 25,
                marginTop: 25,
                marginBottom: 25,
                opacity:1,
            }, 1000, "linear")
            
        }
    })

    function loop(){
        $('button img').animate({
            opacity: 1,
            marginTop: 25,
        }, 500, "linear", )
        $("button img").animate({
            opacity:0,
        },500,"linear",function(){
            loop();
        })
        $("button img").css("marginTop", 0);
                
    } 

    loop();

    $('a[href*="#"]').on('click', function (e) {
  e.preventDefault();
 
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear', function(){
    $('html, body').stop(true);
  });
});



    function Circle(el){
            $(el).circleProgress({fill: {color:'#000'}})
            .on('circle-animation-progress', function(event, progress, stepValue){
                $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2)+"%");
            });
        };
        Circle('.round');
        
});
});