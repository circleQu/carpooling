$('#btn1').click(function(){
    'https://pic.36krcnd.com/avatar/201611/08161639/u0t7vxwf0aefrtdx.png!feature'
});
$('#cancel').click(function(){
    $("#alert").css("display","none");
    $("#cover").css("display","none");
    $('#alert').stop(true,true).animate({top:$('#alert').offsetTop=600},100,'linear');
});
$('#cover').click(function(){
    $("#alert").css("display","none");
    $("#cover").css("display","none");
    $('#alert').stop(true,true).animate({top:$('#alert').offsetTop=600},100,'linear');
});
$('#btn2').click(function(){
    $("#alert").css("display","block");
    $("#cover").css("display","block");
    $('#alert').stop(true,true).animate({top:$('#alert').offsetTop=496},500,'swing');
});


