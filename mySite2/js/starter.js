$(document).ready(function() {
  let addLine = function() {
    $(this).addClass('underline');
  };
  let removeLine = function() {
    $(this).removeClass('underline');
  }

  $(".underlined").hover(addLine)
  $(".underlined").mouseout(removeLine);
});
