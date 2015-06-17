$(function(){
  // scroll programming
  var $mynameCode = $("h1.my_name_typed");
  var $myName = $mynameCode.text();
  var cursor = "<span id='cursor' />";
  var charWidth = 5;

  $(".testlink").click(function(){
    alert('clicked');
  })

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
    }else if($scroll < 2800){
      //about + complete name
      $mynameCode.html("ABOUT "+ $myName + cursor);
    }else if($scroll < 3300){
      $mynameCode.html(("ABOUT "+$myName).substring(0, Math.round((3300-$scroll)/15))+ cursor);
    }else if($scroll < 6000){
      $mynameCode.html(($myName + "'S SKILLS").substring(0, Math.round(($scroll-3300)/15))+ cursor);
    }else if($scroll < 6300){
      //deleting
      $mynameCode.html(($myName+ "'S SKILLS").substring(0, Math.round((6300-$scroll)/15))+ cursor);
    }else if($scroll < 6600){
      $mynameCode.html(($myName + "'S EXPERIENCE").substring(0, Math.round(($scroll-6300)/15))+ cursor);
    }else if($scroll < 9800){
      $mynameCode.html($myName + "'S EXPERIENCE" + cursor);
    }else if($scroll < 10100){
      //deleting
      $mynameCode.html(($myName+ "'S EXPERIENCE").substring(0, Math.round((10100-$scroll)/15))+ cursor);
    }else if($scroll < 10400){
      $mynameCode.html(($myName+"'S PROJECTS").substring(0, Math.round(($scroll-10100)/15))+ cursor);
    }else if($scroll < 12800){
      $mynameCode.html($myName+"'S PROJECTS" + cursor);
    }else if($scroll < 13100){
      //deleting
      $mynameCode.html(($myName+ "'S PROJECTS").substring(0, Math.round((13100-$scroll)/15))+ cursor);
    }else if($scroll < 13400){
      $mynameCode.html(("CONTACT "+ $myName).substring(0, Math.round(($scroll-13100)/15))+ cursor);
    }else if($scroll < 14500){
      //contact + complete name
      $mynameCode.html("CONTACT "+ $myName + cursor);
    }
  });










})