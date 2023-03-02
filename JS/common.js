$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".gotop").fadeIn()
    } else {
      $(".gotop").fadeOut()
    }
  })

  $(".gotop").click(function () {
    $("html").animate({ scrollTop: 0 }, 300)
  })
})
