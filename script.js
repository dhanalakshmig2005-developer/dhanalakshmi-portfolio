document.getElementById("f").addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document.getElementById("n").value;
  var msg = document.getElementById("m").value;
  window.location.href = "mailto:dhanalakshmig2005@gmail.com?subject=" +
    encodeURIComponent("Portfolio message from " + name) +
    "&body=" + encodeURIComponent(msg);
});