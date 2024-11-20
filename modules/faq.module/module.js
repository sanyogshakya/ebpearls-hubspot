var $ = jQuery;
function accordion(){
  if($('.rank-math-list').length > 0 ) {
    let accordion = $('.rank-math-list'),
        opener    = $('.rank-math-list h3'),
        slider    = $('.rank-math-list .rank-math-answer');

    if($(opener).parent().hasClass('active')){
      $('.active').find(slider).show();
    }

    $(accordion).find(opener).on("click", function(e){
      let $this = $(this);
      if($this.parent().hasClass('active')){
        $this.parent().removeClass('active');
        $this.next(slider).slideUp();
      }else{
        $this.parents(accordion).children(opener).removeClass('active');
        $this.parents('.rank-math-list').find('.rank-math-answer ').slideUp();
        $this.parent().addClass('active');
        $this.next(slider).slideDown();
      }
      e.preventDefault();
    });
  }
}

jQuery(function($) {
  accordion();
});