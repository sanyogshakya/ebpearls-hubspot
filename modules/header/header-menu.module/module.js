var $ = jQuery;

function burgerMenu() {
  $('#site-header-menu-toggle').click(function(e) {
    e.preventDefault();
    $('body').toggleClass('nav-active');
  });

  $('.nav-close').click(function(e) {
    e.preventDefault();
    $('body').removeClass('nav-active');
  });

  $('.primary-menu .icon-wrapper').click(function(){
    $(this).next().slideToggle();
    $(this).parent('li').toggleClass('submenu-active');
  });

  $('.primary-menu .has-icon-title .menu-title-wrap').click(function(){
    $(this).next().slideToggle();
    $(this).toggleClass('submenu-active');
  });

  $('.primary-menu > ul > li > .menu-link-title').click(function(e){
    if (jQuery(window).width() < 1024) {
      if($(this).parent().hasClass('menu-item-has-children')) {
        e.preventDefault();
        $(this).parent('li').toggleClass('submenu-active');
        $(this).siblings('.mega-menu-block, .sub-menu').slideToggle();
      }
    }
  });
}

jQuery(document).ready(function($) {
  burgerMenu();
});

jQuery(window).on('resize', function($) {
  if (jQuery(window).width() > 1023) {
    jQuery('body').removeClass('nav-active');
    jQuery('.primary-menu .menu-item-has-children').removeClass('submenu-active');
    jQuery('.primary-menu .menu-item-has-children > ul, .primary-menu .menu-item-has-children > .mega-menu-block ').removeAttr('style');
  }
});

function stickyHeader() {
	if (window.scrollY > 15) {
		document.body.classList.add("sticky");
	} else {
		document.body.classList.remove("sticky");
	}
}

window.addEventListener('scroll', stickyHeader);
window.addEventListener('load', stickyHeader);