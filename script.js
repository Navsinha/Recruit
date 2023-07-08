var settings = document.getElementById('toggle-open');
var close = document.getElementById('toggle-close');
var tooglebox = document.getElementById('toggle-box');

settings.onclick = function(){
    tooglebox.className = "open";
    alert(tooglebox.className);
}    
close.onclick = function(){
    tooglebox.className = "close";
    alert(tooglebox.className);
}

function signed(){
    window.location.href="signIN.html";
}