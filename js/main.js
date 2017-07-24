$(document).ready(function(){
    // init Isotope
var $grid = $('.item').isotope({
  itemSelector:'.item-box',
});
// filter items on button click
$('.filter-button-group').on( 'click', 'a.btnf', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });
    //counter
    
    $('.counterup').counterUp({
                delay: 10,
                time: 1000
            });
//    menu
    
    jQuery('.menu').meanmenu();
    
    
});

