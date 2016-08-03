$( document ).ready(function() {
  console.log('connected!!');
  $('#aboutMe').click(toggleText);
  function toggleText() {
  $('.blurb').toggle();
}
  $('#aboutYou').click(toggleNext);
  function toggleNext() {
    $('.nextBlurb').toggle();
}
});
