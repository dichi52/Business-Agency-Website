$(function () {
  $(document).scroll(function () {
    let $nav = $(".nav");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

let menu = document.getElementById("bar");
let items = document.getElementById("navbar");

items.style.right = "-360px";

menu.onclick = function () {
  if (items.style.right == "-360px") {
    items.style.right = "0";
  } else {
    items.style.right = "-360px";
  }
};
