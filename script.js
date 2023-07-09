var settings = document.getElementById('toggle-open');
var close = document.getElementById('toggle-close');
var tooglebox = document.getElementById('toggle-box');

  

function signed(){
    window.location.href="signIN.html";
}




function closeNav() {
    var x = document.getElementById("re3__navbar-menu");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }