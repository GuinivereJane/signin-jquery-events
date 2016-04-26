$('document').ready(function(){
  $('.signin').on('click',function() {
      $('.modal').fadeIn(400);
  });
  $('.close').on('click', function() {
    $('.modal').fadeOut(400);
  });
  $('.submit').on('click', function(e) {
      e.stopPropagation();
      $('input').addClass('error');

    });
  $('input').on('click', function(e) {
    e.stopPropagation();
    $('input').removeClass('error');
  });
  $('.modal').on('click', function() {
    $('.modal').css('display','none');
  });
});
