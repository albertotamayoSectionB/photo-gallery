    //prof, is there anyway I can make this code shorter?
    //Should I use loops instead?

$(document).ready(function(){
    $(".Toronto").click(function(){
        $('.hometown').show();
        $('.capital').fadeOut();
        $('.america').fadeOut();
    })
    $(".Ottawa").click(function(){
        $('.capital').show();
        $('.hometown').fadeOut();
        $('.america').fadeOut();
    })
    $(".San_Diego").click(function(){
        $('.america').show();
        $('.hometown').fadeOut();
        $('.capital').fadeOut();
    })
    $(".ShowAll").click(function(){
        $('.america').fadeIn(1000);
        $('.hometown').fadeIn(1000);
        $('.capital').fadeIn(1000);
    })
})