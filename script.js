var current = 1;
var max = $(".quotediv p").length;

$(".rightbutton").click(function () {
  $(".quotediv p").hide();
  if (current == max) {
    current = 1;
  } else {
    current = current + 1;
  }
  $(".quotediv p:nth-child(" + current + ")").fadeIn("slow");
});

$(".leftbutton").click(function () {
  $(".quotediv p").hide();
  if (current == 1) {
    current = max;
  } else {
    current = current - 1;
  }
  $(".quotediv p:nth-child(" + current + ")").fadeIn("slow");
});
