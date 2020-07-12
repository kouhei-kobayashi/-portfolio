$(function(){
    $('.sp-trigger').on('click',function(){
        $(this).toggleClass('is-active');
        $('.sp-menu').toggleClass('is-active');
    })
})









$(window).on("scroll",function(){
//    fadeIn
$('[data-fadeIn]').each(function(index,el){
    if($(window).scrollTop() > $(el).offset().top - $(window).height() / 2){
        $(el).addClass('is-over');
      
    }
}
)
//トップページへ戻る
if($(window).scrollTop() > 100){
    $('.cercle-baner').addClass('is-over');
}else{
    $('.cercle-baner').removeClass('is-over');
}


})