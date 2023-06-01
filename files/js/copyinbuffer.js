// Code by Gnatkovsky.com.ua
// https://gnatkovsky.com.ua/skopirovat-pri-nazhatii.html

jQuery(document).ready(function ($) {
  $('.text_copy_link').click(function () {
    var textCopy = $(this), tempInput = $("<input>");
    $("body").append(tempInput);
    tempInput.val(textCopy.text()).select();

    document.execCommand("copy"), tempInput.remove();

    $('.copied_text').fadeIn(410);
    setTimeout(function () {
      $('.copied_text').fadeOut(400);
    }, 5000);
  });
});