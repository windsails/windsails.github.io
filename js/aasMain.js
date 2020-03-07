

/*  激活popover */
$(function () {
	$('[data-toggle="popover"]').popover()
  });

  /*  激活tooltip */
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
  });

// $('#backToTopBtn').click(function(){
//     $('html,body').animate({scrollTop:0},'slow');return false;
// });  

$( '#backToTopBtn' ).on( 'click', function () {
  $('html,body').animate({scrollTop:0},'slow');return false;
});
