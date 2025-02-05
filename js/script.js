$(document).ready(function(){

    $(window).scroll(function(){

        var scroll_Top = $(this).scrollTop();
    
        if(scroll_Top>200){
            $("#gotop").css('display','inline');
        }
        else{
            $("#gotop").css('display','none');
        }
    })

    $("#gotop").click(function(){
        $("html").animate({scrollTop:0},1000);
    })

})