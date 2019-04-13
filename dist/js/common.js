// $(document).ready(function() {});
// https://css-tricks.com/snippets/jquery/run-javascript-only-after-entire-page-has-loaded/
// https://stackoverflow.com/questions/16540136/javascript-how-to-remove-the-last-character-from-a-div-or-a-string
// https://stackoverflow.com/questions/9970855/how-to-replace-the-span-text-using-class-name-inside-div

$(document).ready(function(){
  // Set the date we're counting down to
  var countDownDate = new Date("Apr 12, 2019 21:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="countdown"
    document.getElementById("countdown").innerHTML = days + "<span>天</span>" + hours + "<span>小時</span>"
    + minutes + "<span>分</span>" + seconds + "<span>秒</span>";

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "接單已截止，謝謝大家～";
    }
  }, 1000);

  AOS.init({
    easing: 'ease-out-quart',
    duration: 900
  });

  $('.single-item').slick({
    dots: true,
  });
});

$(window).bind("load", function() {
  $('.form-heading').text(function (_,txt) {
    return txt.slice(3, -1);
  });
  $(".label-at-top[for=productName]:contains('商品樣式')").html('選擇尺寸或款式');
  $(".label-at-top[for=productQuantity]:contains('購買數量')").html('選擇數量');
});