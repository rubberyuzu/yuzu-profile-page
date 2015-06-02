$(function(){
  // scroll programming
  var $mynameCode = $("h1.my_name_typed");
  var $myName = $mynameCode.text();
  var cursor = "<span id='cursor' />";
  var charWidth = 5;
  $(window).scroll(function(){
    $mynameCode.css('visibility', 'visible');
    $mynameCode.html(cursor);
    $scroll = $(this).scrollTop();
    
    if($scroll < 250){
      $(".test").text($scroll);
      $mynameCode.html($myName.substring(0, Math.round($scroll/15))+ cursor);
    }else if($scroll < 300){
      //complete name
      $mynameCode.html($myName + cursor);
    }else if($scroll < 550){
      //deleting
      $mynameCode.html($myName.substring(0, Math.round((550-$scroll)/15))+ cursor);
    }else if($scroll < 800){
      $mynameCode.html(("ABOUT "+ $myName).substring(0, Math.round(($scroll-550)/15))+ cursor);
    }else if($scroll < 3000){
      //about + complete name
      $mynameCode.html("ABOUT "+ $myName + cursor);
    }else if($scroll < 3500){
      $mynameCode.html(("ABOUT "+$myName).substring(0, Math.round((3500-$scroll)/15))+ cursor);
    }else if($scroll < 5500){
      $mynameCode.html(($myName + "'S SKILLS").substring(0, Math.round(($scroll-3500)/15))+ cursor);
    }
  });








})