//main.js

$(function(){
    $('#gnb > ul > li').hover(
        
        function(){
            $(this).children().addClass('on');
        },
        function(){
            $(this).children().removeClass('on');
        }
    );
    $.stellar({
        horizontalScrolling:false,
        verticalSxrolling: true,
        verticsalOffset:50,
    });
})