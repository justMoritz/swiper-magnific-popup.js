(function() {
  /* Define a variável que dá swipe no lightbox */
  var magnificPopup = $.magnificPopup.instance;

  /* Carrega a função quando clica no lightbox (senão não pega a classe utilizada) */
  $("SAME-SELECTOR-AS-YOUR-GALLERY-OPENER").click(function(e) {

     /* Espera carregar o lightbox */
      setTimeout(function() {
          /* Right Swipe With Animation */
          $(".mfp-container").swipe( {
            swipeLeft:function(event, direction, distance, duration, fingerCount) {
              console.log("swipe right");

              $('.mfp-img').css('transition', 'all 0.3s');
              $('.mfp-img').css('transform', 'translateX(-50%)');
              $('.mfp-img').css('opacity', '0');

              setTimeout(function(){
                magnificPopup.next();
                $('.mfp-img').css('opacity', '0');
                $('.mfp-img').css('transform', 'translateX(50%)');
                $('.mfp-img').css('transition', 'all 0.3s');
                
                setTimeout(function(){
                  $('.mfp-img').css('opacity', '1');
                  $('.mfp-img').css('transform', 'translateX(0%)');
                }, 50);

              }, 100);
            },

          /* Left Swipe With Animation */
          swipeRight:function(event, direction, distance, duration, fingerCount) {
            console.log("swipe left");

              $('.mfp-img').css('transition', 'all 0.3s');
              $('.mfp-img').css('transform', 'translateX(50%)');
              $('.mfp-img').css('opacity', '0');

              setTimeout(function(){
                 magnificPopup.prev();
                $('.mfp-img').css('opacity', '0');
                $('.mfp-img').css('transform', 'translateX(-50%)');
                $('.mfp-img').css('transition', 'all 0.3s');

                setTimeout(function(){
                  $('.mfp-img').css('opacity', '1');
                  $('.mfp-img').css('transform', 'translateX(0%)');
                }, 50);

              }, 100);

            },
          });
      }, 500);
  });

}).call(this);