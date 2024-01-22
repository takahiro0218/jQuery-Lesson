// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });

// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });

// $(function(){
//   $('.box1').show();
//   $(".box1").css({"background-color": "#0000FF"});
// });

// $(function(){
//     $(".box1").hide();
// });

$(function(){
  $(".box1").slideDown(1000,function(){
    $(".box1").css({
      "height": "100px",
      "width": "200px",
      "background-color": "#0000FF"
    });
    $(".box1").slideUp(1000);
  })
});