let icon = document.getElementById('icon-nav');
let navIcon = document.getElementsByClassName('nav__icon');
let navBody = document.getElementsByClassName('nav__body');

icon.onclick = function() {
    navIcon[0].classList.toggle("_active");
    navBody[0].classList.toggle("_active");
}


