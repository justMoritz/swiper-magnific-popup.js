(function() {
  /* Sets a variable that swipe in lightbox */
  var magnificPopup = $.magnificPopup.instance;

  /* Loads the function when clicking the lightbox. This is the same selector as your Lightbox / Gallery opener. */
  $("SAME-SELECTOR-AS-YOUR-LIGHTBOX-GALLERY-OPENER").click(function(e) {

     /* Expect to load lightbox */
      setTimeout(function() {
          /* Right Swipe With Animation (listens to swipe event from touchSwipe) */
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