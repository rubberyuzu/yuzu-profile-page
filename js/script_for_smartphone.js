$(function(){
  $(window).scroll(function(){
    $scroll = $(this).scrollTop();
    
    if($scroll < 11400){
      $(".sns_logo").css("pointer-events", "none");
    }else if($scroll < 14500){
      $(".sns_logo").css("pointer-events", "auto");
    }    
  });

})