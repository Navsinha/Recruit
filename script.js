var settings = document.getElementById('toggle-open');
var close = document.getElementById('toggle-close');
var tooglebox = document.getElementById('toggle-box');

  

function signed(){
    window.location.href="signIN.html";
}

const toggleMenuBtn = document.getElementById('toggleMenuBtn');
const menuContainer = document.getElementById('menuContainer');

toggleMenuBtn.addEventListener('click', function() {
  menuContainer.classList.toggle('show');
});