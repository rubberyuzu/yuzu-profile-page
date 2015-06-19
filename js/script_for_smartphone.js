$(function(){
  $(window).scroll(function(){
    $scroll = $(this).scrollTop();
    
    if($scroll < 11400){
      $(".sns_logo").css("pointer-events", "none");
      $(".first_projectpage_link").css("pointer-events", "none");
      $(".second_projectpage_link").css("pointer-events", "none");
    }else if($scroll < 12100){
      $(".sns_logo").css("pointer-events", "none");
      $(".first_projectpage_link").css("pointer-events", "auto");
      $(".second_projectpage_link").css("pointer-events", "none");
    }else if($scroll < 13000){
      $(".sns_logo").css("pointer-events", "none");
      $(".second_projectpage_link").css("pointer-events", "auto");
    }else if($scroll < 13800){
      $(".sns_logo").css("pointer-events", "none");
       $(".second_projectpage_link").css("pointer-events", "none");
    }else if($scroll < 14500){
      $(".sns_logo").css("pointer-events", "auto");
      draw();
    }    
  });
  function draw(){
    for(var i = 0; i < 60; i++) {
      var startValue = (Math.random() - Math.random()) * 2 +25 ;

      var domElement = document.createElement('div');
      domElement.setAttribute("class","random_noise");
      var bg = (Math.random() * 0xffffff) >> 0;
      domElement.style.position = 'fixed';
      domElement.style.top = (Math.random() * window.innerHeight) + 'px';
      domElement.style.left = startValue + '%';
      domElement.style.background = '#' + bg.toString(16);
      domElement.style.width = '40%';
      domElement.style.height = '0.5px';
      var elem = { x: startValue, domElement: domElement };
      document.body.appendChild(elem.domElement);

    }
  }


})