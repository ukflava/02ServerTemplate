$(document).ready(function() {

  $("#tweet-text").on('keyup', function() {
    let limit = 140;
    const $input = $("#tweet-text");
    const remaining = limit - $input.val().length;
    // if(remaining < 0){}
    color = remaining < 0 ? 'red' : 'black';
    $("#remaining").html(remaining);
    $("#remaining").css({
      'color': color
    });
   });

  $("#showButton").on('click',()=>{
    $("#targettweet").slideToggle();
    $("#showButton").toggleClass('rotate')
    console.log("banana")
  })

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
});


$('.scrollToTop').click(function(){
  $("#targettweet").slideDown()
    $('html, body').animate({scrollTop : 0},800);
    return false;
});

});
