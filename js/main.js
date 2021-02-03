$(function () {
  $(".toggle_btn").on("click", function () {
    $(".header-nav,.toggle_btn").toggleClass("open");
    $("body,html").toggleClass("bg-fixed");
  });
});
