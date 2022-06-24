$(document).ready(function() {

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const loadTweets = () => {
   
    $.get(`/tweets`).then(data => {
      renderTweets(data);
    
    });
  
  };
  loadTweets();

  $("#targettweet").submit(function(event) {
    $('#errorShort').hide();
    $('#errorLong').hide();
    event.preventDefault();
    const $input = $('#tweet-text').val().length;
    $('#tweet-text').text('#tweet-text');
    // let XSSsafetext = $("#targettweet").val()
    let postdata = $("#targettweet").serialize();
    console.log($('#tweet-text'));
    if ($input < 1) {
      $('#errorShort').slideDown();
    }
    if ($input > 140) {
      $('#errorLong').slideDown();
    } else {
      $.post("/tweets", postdata)
        .done(() => {

          $("#remaining").html(remaining);
          $('#tweet-text').val('').focus();
          $('#tweetlist').empty();
          loadTweets();
        });
    
    }
  
  });

  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      let buffer = createTweetElement(tweet);
      $('<article class="tweetbox">').html(buffer).prependTo('#tweetlist');
    }

  };

  const createTweetElement = function(tweet) {
    
    let $tweet = `<div class="tweethead"><div><p><img src="${tweet.user['avatars']}width="20" height="20"">${tweet.user['name']}</p></div><p>${tweet.user['handle']}</p></div>
          <p class="tweetbody">${escape(tweet.content['text'])} </p>
          <div class="tweetfooter"> ${timeago.format(tweet.created_at)}<div><i class="social fa-solid fa-flag"></i><i class="social fa-solid fa-retweet"></i><i class="social fa-solid fa-heart"></i> </div> </div>
    `;
  
    return $tweet;
  };

});

//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 

