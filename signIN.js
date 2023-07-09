function closeNav() {
    var x = document.getElementById("re3__navbar-menu");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }
  function signed(){
    window.location.href="signIN.html";
}