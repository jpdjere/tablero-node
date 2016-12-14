function showFloatingHeaderBody() {
var scroller = $("body");

  if (scroller.scrollTop() > 90) {
    $('#tableroFloatingHeader').addClass("opacity1");
    console.log('body')
  } else {
    $('#tableroFloatingHeader').removeClass("opacity1");
  };
}
function showFloatingHeaderHTML() {
var scroller = $("html");

  if (scroller.scrollTop() > 90) {
    $('#tableroFloatingHeader').addClass("opacity1");
    console.log('html')
  } else if ((scroller.scrollTop() > 0)) {
    $('#tableroFloatingHeader').removeClass("opacity1");
  };
}
