// code to calculate what year of my PhD I am in
document.addEventListener("DOMContentLoaded", function () {
  start = 1502780400
  delta_seconds = (Date.now() / 1000) - start
  delta_years = Math.ceil(delta_seconds / 60 / 60 / 24 / 365)
  document.getElementById("phd-year").innerHTML = delta_years + "th";
});
