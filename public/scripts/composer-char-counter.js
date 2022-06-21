$(document).ready(function() {

  $("#tweet-text").on('keyup', function(){
    let limit = 140
    const $input = $("#tweet-text");
    const remaining = limit - $input.val().length
    // if(remaining < 0){} 
    color = remaining < 0 ?'red':'black'
    $("#remaining").html(remaining);
    $("#remaining").css({
      'color': color
    });
// const usertweet = $input.val()
// const $buffertweet = $('<li>').text(usertweet).prependTo($tweetlist)
// const$('tweetlength').prepend(usertweet)
console.log(remaining)
// $input.val('').focus()
  })
  // $(".new-tweet").on('keypress',()=>{
  //   console.log("banana")
  // })
  
});

// $(() => {

//   $("#addTweet").on('click',()=>{
//  const $input = $("#tweet-text");
// const usertweet = $input.val()
// const $buffertweet = $('<li>').text(usertweet).prependTo($tweetlist)
// // $tweetlist.prepend($buffertweet)
// console.log(usertweet)
// $input.val('').focus()
//   })
// });