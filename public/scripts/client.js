$(document).ready(function() {
  // const data = [
  //   {
  //     "user": {
  //       "name": "Newton",
  //       "avatars": "https://i.imgur.com/73hZDYK.png"
  //       ,
  //       "handle": "@SirIsaac"
  //     },
  //     "content": {
  //       "text": "If I have seen further it is by standing on the shoulders of giants"
  //     },
  //     "created_at": 1461116232227
  //   },

  //   {
  //     "user": {
  //       "name": "Descartes",
  //       "avatars": "https://i.imgur.com/nlhLi3I.png",
  //       "handle": "@rd" },
  //     "content": {
  //       "text": "Je pense , donc je suis"
  //     },
  //     "created_at": 1461113959088
  //   }
  // ];

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const loadTweets = () => {
   
    $.get(`/tweets`).then(data => {
      // $('#00000').empty()
      renderTweets(data);
    
    })
  
  }
loadTweets()

  $("#targettweet").submit(function(event) {
    $('#errorShort').hide()
    $('#errorLong').hide()
    event.preventDefault();
    const $input = $('#tweet-text').val().length
    $('#tweet-text').text('#tweet-text')
    // let XSSsafetext = $("#targettweet").val()
    let postdata = $("#targettweet").serialize();
    console.log($('#tweet-text'))
    if ($input < 1){ $('#errorShort').slideDown()}
    if ($input > 140){ $('#errorLong').slideDown()}
        
    else{ 
    $.post( "/tweets", postdata)
    .done(() => {

      $("#remaining").html(remaining);
      $('#tweet-text').val('').focus();
      $('#tweetlist').empty();
      loadTweets()
    } )
    
  }
  // console.log("postdata", postdata)
  
  });
  // loadTweets()

  // $("#targettweet").submit(function(event) {
  //   $('#errorShort').hide()
  //   $('#errorLong').hide()
  //   event.preventDefault();
  //   const $input = $('#tweet-text').val().length
  //   let XSSsafetext = $("#targettweet").text
  //   let postdata = $("#targettweet").serialize();
  //   console.log(postdata)
  //   if ($input < 1){ $('#errorShort').slideDown()}
  //   if ($input > 140){ $('#errorLong').slideDown()}
  //   // alert( "Handler for .submit() called." );
    
  //   else{ 
  //   $.post( "/tweets", postdata)
  //   .done(() => {

  //     $("#remaining").html(remaining);
  //     $('#tweet-text').val('').focus();
  //     $('#tweetlist').empty();
  //     loadTweets()
  //   } )
    
  // }







// *********


  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      let buffer = createTweetElement(tweet);
      $('<article class="tweetbox">').html(buffer).prependTo('#tweetlist');
    }

     // $("#addTweet").on('click',()=>{
    //   const $input = $("#targettweet")
      //  const usertweet = $input.val()
      //  const $buffertweet = $('<article>').text(usertweet).prependTo(data)
      // $tweetlist.prepend($buffertweet)
      // console.log($input);
      //  $input.val('').focus()
    // });
  };

  const createTweetElement = function(tweet) {
    let $tweet = `<div class="tweethead"><div><p><img src="${tweet.user['avatars']}width="20" height="20"">${tweet.user['name']}</p></div><p>${tweet.user['handle']}</p></div>
          <p class="tweetbody">${tweet.content['text']} </p>
          
          <div class="tweetfooter"> ${timeago.format(tweet.created_at)}<div><i class="social fa-solid fa-flag"></i><i class="social fa-solid fa-retweet"></i><i class="social fa-solid fa-heart"></i> </div> </div>
    `
  
    return $tweet;
  };

  // renderTweets(data);

});

//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 

