
/**  Start Of 百度的统代码, JonathanYang, 20200310 */
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?65dfa9d7863432c04b12fbb0dd737d3f";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
/** End of 百度的统计代码, JonathanYang, 20200310 */

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

// 定义#backToTopBtn点击的事件
$('#backToTopBtn').on( 'click', function () {
  $('html,body').animate({scrollTop:0},'slow');return false;
});

// 定义#backToTopBtn出现的时机
$(window).scroll(function() {
  if ($(this).scrollTop() > 80) {
    $('#backToTopBtn').fadeIn('slow');
  } else {
    $('#backToTopBtn').fadeOut('slow');
  }
});

// 手机设备时候，点击收回菜单，需要定义多个需要的对象id
// 改为用css来标记
// $('.navbar-nav li a ).on('click',function () {
$('.navbar-nav li  .navMenuItem').on('click',function () {
  // $('#mHome, #mProd, #mContact').on('click',function () {
  $('#aasNavbars').collapse('hide');
});
