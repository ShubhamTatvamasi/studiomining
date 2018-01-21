
/*=============================================================
    Studio Mining   
    ========================================================  */

(function ($) {
    "use strict";
    var mainApp = {
        scroll_fun: function () {

            //CUSTOM SCROLL SCRIPT FUNCTION FOR NAVBAR 
          $(function () {
              $('.scrollclass a').bind('click', function (event) { //just pass scrollclass in design and start scrolling
                  var $anchor = $(this);
                  $('html, body').stop().animate({
                      scrollTop: $($anchor.attr('href')).offset().top
                  }, 1200, 'easeInOutExpo');
                  event.preventDefault();
              });
          });
            

        },
        
        gallery_fun: function () {
            /*====================================
                 FOR IMAGE/GALLERY POPUP
            ======================================*/
            $("a.preview").prettyPhoto({
                social_tools: false
            });

            /*====================================
            FOR IMAGE/GALLERY FILTER
            ======================================*/

            // MixItUp plugin
            // http://mixitup.io

            $('#port-folio').mixitup({
                targetSelector: '.portfolio-item',
                filterSelector: '.filter',


            });
        },
        nicescroll_fun:function()
        {
            $("html").niceScroll();
        },

      
        custom_fun:function()
        {
            /*====================================
             WRITE YOUR   SCRIPTS  BELOW
            ======================================*/




        },

    }
   
   
    $(document).ready(function () {
        mainApp.scroll_fun();
        mainApp.gallery_fun();
        mainApp.nicescroll_fun();
        mainApp.custom_fun();

    });
}(jQuery));


  // Buy Rig

     var form = $('#main-contact-form');
    form.submit(function(event){
        event.preventDefault();
        var form_status = $('<div class="form_status"></div>');
        var data = {
            rig: $('#rig').val(),
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            address: $('#address').val()
        };
        $.ajax({
            url: $(this).attr('action'),
            type: "POST",
            dataType: "json",
            data: {'data': data},
            beforeSend: function(){
                form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Booking your Mining RIG...</p>').fadeIn() );
            },
            success: function (data) {
                if(data == 1){
                    form_status.html('<p class="text-success">Thank you, your Mining RIG has been booked successfully.</p>').delay(3000).fadeOut();
                }
                else{
                    form_status.html('<p class="text-error">Sorry, we are out of stock.</p>').delay(3000).fadeOut();
                }
            },
            error: function (xhr, status, error) {
                console.log(error);
            }
        });
    });