$(document).ready(function(){
  $('.rounds').slick({
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows:true,
      prevArrow:"<span><i class='fa fa-chevron-left' aria-hidden='true' style='float: left;margin-top: 270px;color: #dbdbdb;font-size: 30px;text-shadow: 0 1px 1px rgba(0,0,0,.1);'></i></span>",
      nextArrow:"<span><i class='fa fa-chevron-right' aria-hidden='true' style='float:right;margin-top: -280px;margin-right:-20px;color: #dbdbdb;font-size: 30px;text-shadow: 0 1px 1px rgba(0,0,0,.1);'></i></span>",

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            
           
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll:1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });
});

$('#r-1').countdown('2017/10/10', function(event) {
  $('#r-name1').html(event.strftime('%m  :  %w  :  %d '));
});
$('#r-2').countdown('2018/10/10', function(event) {
  $('#r-name2').html(event.strftime('%m  :  %w  :  %d '));
});
$('#r-3').countdown('2019/10/10', function(event) {
  $('#r-name3').html(event.strftime('%m  :  %w  :  %d '));

});

$('#r-4').countdown('2017/10/10', function(event) {
  $('#r-name4').html(event.strftime('%m  :  %w  :  %d '));
});
$('#r-5').countdown('2018/10/10', function(event) {
  $('#r-name5').html(event.strftime('%m  :  %w  :  %d '));
});
$('#r-6').countdown('2019/10/10', function(event) {
  $('#r-name6').html(event.strftime('%m  :  %w  :  %d '));

});

$('#r-7').countdown('2017/10/10', function(event) {
  $('#r-name7').html(event.strftime('%m  :  %w  :  %d '));
});
$('#r-8').countdown('2018/10/10', function(event) {
  $('#r-name8').html(event.strftime('%m  :  %w  :  %d '));
});
$('#r-9').countdown('2019/10/10', function(event) {
  $('#r-name9').html(event.strftime('%m  :  %w  :  %d '));

});





$(document).ready(function() {
  $('#students').carousel({
    pause: true,
    interval: false,
  });
});

$(document).ready(function(){
  $(".students").slick({
 focusOnSelect:true,
 initialSlide:1,
responsive:'unslick',
 prevArrow: false,
    nextArrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true
  });
});

$(document).ready(function(){
    $(".sponsors").slick({
     infinite: true,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows:true,
      prevArrow:"<span><i class='fa fa-chevron-left' aria-hidden='true' style='float: left;margin-top: 80px;color: #dbdbdb;font-size: 30px;text-shadow: 0 1px 1px rgba(0,0,0,.1);'></i></span>",
      nextArrow:"<span><i class='fa fa-chevron-right' aria-hidden='true' style='float:right;margin-top: -120px;margin-right:-20px;color: #dbdbdb;font-size: 30px;text-shadow: 0 1px 1px rgba(0,0,0,.1);'></i></span>",

      centerPadding: '60px',
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            
           
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
         
        });
});



