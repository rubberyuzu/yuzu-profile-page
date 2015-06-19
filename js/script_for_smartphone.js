$(function(){
  $(window).scroll(function(){
    $scroll = $(this).scrollTop();
    
   
    if($scroll < 13800){
      $(".sns_logo").css("pointer-events", "none");
    }else if ($scroll < 14000){
      delete_noise();
      init_called = false;
    }else if(($scroll <14100) && ($scroll>14000) && (init_called == false)){
      init();
    }else if($scroll > 14100){
      animate();
    }else if($scroll < 14500){
      $(".sns_logo").css("pointer-events", "auto");
    }    
  });


      var elems = [];
      var init_called = false;
      function init() {
        if(init_called == false){
        elems = [];
        for(var i = 0; i < 120; i++) {
          var startValue = (Math.random() - Math.random()) * 2 +25 ;
          var endValue = 40+ (Math.random() - Math.random()) * 2;
          var domElement = document.createElement('div');
          domElement.setAttribute("class","random_noise");
          var bg = (Math.random() * 0xffffff) >> 0;
          domElement.style.position = 'fixed';
          domElement.style.top = (Math.random() * window.innerHeight) + 'px';
          domElement.style.left = startValue + '%';
          // domElement.style.background= Colors.random().rgb;
          domElement.style.background = '#' + bg.toString(16);
          domElement.style.width = '40%';
          domElement.style.height = '0.5px';
          var elem = { x: startValue, domElement: domElement };
          var updateCallback = function() {
            this.domElement.style.left = this.x + '%';
          }
          var tween = new TWEEN.Tween(elem)
            .to({ x: endValue }, 2000)
            .delay(Math.random() * 1000)
            .onUpdate(updateCallback)
            .easing(TWEEN.Easing.Sinusoidal.InOut)
            .start();
          var tweenBack = new TWEEN.Tween(elem, false)
            .to({ x: startValue}, 2000)
            .delay(Math.random() * 1000)
            .onUpdate(updateCallback)
            .easing(TWEEN.Easing.Sinusoidal.InOut);
          tween.chain(tweenBack);
          tweenBack.chain(tween);
          document.body.appendChild(elem.domElement);
          elems.push(elem);
        }
        init_called = true;
      }
      }
      function animate( time ) {
        requestAnimationFrame( animate );
        TWEEN.update( time );
      }
      function delete_noise(){
        $(".random_noise").remove();
        console.log("surely removed");
      }

})