// EVENT LISTENERS

// this changes the colors of the h1 when any of the buttons are clicked
$(".button-1").click(function () {
  $("h1").css("color", "purple");
});

$(".button-2").click(function () {
  $("h1").css("color", "red");
});

$(".button-3").click(function () {
  $("h1").css("color", "green");
});

$(".button-4").click(function () {
  $("h1").css("color", "blue");
});

$(".button-5").click(function () {
  $("h1").css("color", "black");
});

$("input").keypress(function (event) {
  console.log(event.key);
});

// This prints out the key pressed on the h1 property
$(document).keypress(function (event) {
  $("h1").text(event.key);
});

// this changes the color of the h1 on hover to green
$("h1").on("mouseover", function () {
  $("h1").css("color", "green");
});

// this adds a new html element
$("h1").before("<button>new</button>");
$("h1").after("<button>new</button>");
$("h1").append("<button>new</button>");
$("h1").prepend("<button>new</button>");
