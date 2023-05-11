window.addEventListener("scroll", function() {
  var scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  var color = getColorFromPercentage(scrollPercentage);
  document.querySelector("footer").style.backgroundColor = color;
});

function getColorFromPercentage(percentage) {
  var hue = percentage * 2;
  return "hsl(" + hue + ", 100%, 50%)";
}
