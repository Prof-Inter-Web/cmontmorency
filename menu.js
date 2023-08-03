$(function(){
    $('#content_overlay').fadeOut('fast');
    $('.toggle-nav').click(function(){
      $('#content_wrapper').toggleClass('show-nav');
      $('#content_overlay').fadeIn('fast');
      $('.toggle-nav').toggleClass("button_clicked");
   e.preventDefault();/*button rotation animation*/
  });/*show or hide navegation*/
    
  $(document).keyup(function(e) {
      if (e.keyCode == 27) { //esc key
          if ($('#content_wrapper').hasClass('show-nav')) {
            $('#content_overlay').fadeOut('fast');
              $('#content_wrapper').toggleClass('show-nav');
            $('#button a').toggleClass("button_clicked");
   e.preventDefault();/*button rotation animation*/
          }
      } 
  });/* esc key bidding*/
  
  $('#content_overlay').click(function(){
    $('#content_overlay').fadeOut('fast');
    $('#content_wrapper').toggleClass('show-nav');
    $('#button a').toggleClass("button_clicked");
   e.preventDefault();/*button rotation animation*/
  })
  
  });/* brings overlay when navigation is active*/
  
  