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
      $(".sns_logo").css("pointer-events", "auto");
    }

    if($scroll < 13800){
      $(".sns_logo").css("pointer-events", "none");
    }else if ($scroll < 14000){
      delete_noise();
      init_called = false;
    }else if(($scroll <14100) && ($scroll>14000) && (init_called == false)){
      init();
    }else if($scroll > 14100){
      animate();
    }

  });


      var elems = [];
      var init_called = false;
      function init() {
        if(init_called == false){
        elems = [];
        for(var i = 0; i < 60; i++) {
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
    // Colors = {};
    // Colors.names = {
    //     aqua: "#00ffff",
    //     azure: "#f0ffff",
    //     blue: "#0000ff",
    //     darkblue: "#00008b",
    //     darkgreen: "#006400",
    //     green: "#008000",
    //     lightblue: "#add8e6",
    //     lightgreen: "#90ee90",
    //     lime: "#00ff00",
    // };
    // Colors.random = function() {
    //     var result;
    //     var count = 0;
    //     for (var prop in this.names)
    //         if (Math.random() < 1/++count)
    //            result = prop;
    //     return { name: result, rgb: this.names[result]};
    // };



})