$('.grid').masonry({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  gutter: 20,
  // use element for option
  // columnWidth: '.grid-sizer',
  percentPosition: true,
  fitWidth: true
})


// init Masonry
var $grid = $('.grid').masonry({
  // options...
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});


// $(document).ready(function() {
//   // $(".fancy").fancybox({
//   //   'transitionIn'  : 'elastic',
//   //   'transitionOut' : 'elastic',
//   //   'speedIn'   : 600, 
//   //   'speedOut'    : 200, 
//   //   'overlayShow' : true,
//   // });
//   $("[data-fancybox]").fancybox({
//      selector : '[data-fancybox="images"]',
//       loop     : true,
//   });
  
// });
$(document).ready(function(){
  $("[data-fancybox]").fancybox({
  });
});