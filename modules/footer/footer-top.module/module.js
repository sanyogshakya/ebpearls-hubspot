var $ = jQuery;
function accordionFooter(){
  $('.footer-top .has--toggle .widget-title').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    if ($this.hasClass('show')) {
      $this.removeClass('show').next().slideUp(350);
    } else {
      $this.parents('.row').find('.has--toggle .widget-toggle--wrapper').removeClass('show').next().slideUp(350);
      $this.toggleClass('show').next().slideToggle(350);
    }
  });
}

jQuery(function($) {
  accordionFooter();
});

$(window).on('resize', function() {
  if($(window).width() > 1200) {
    $('.footer-top .has--toggle .widget-title').next().removeAttr('style');
  }
});