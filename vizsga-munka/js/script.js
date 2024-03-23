/*function mutat() {
    document.getElementById("fo-lap").style.display = "block";
    document.getElementById("fo-lap").style.width = "100px";
    document.getElementById("fo-lap").style.height = "50px";
}

function elrejt() {
    document.getElementById("fo-lap").style.display = "none";
}*/

let menu = document.querySelector(".menu");
let menuItem = document.querySelector(".menuItem");
let hamburgerMenu = document.querySelector(".hamburger");
let closeIcon = document.querySelector(".closeIcon");
let closeIconNyitolap = document.querySelector(".closeIcon .closeIcon-nyito");



function toggleMenu() {
    if(menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        hamburgerMenu.style.display = "block";
        closeIcon.style.display = "none";
        closeIconNyitolap.style.display = "none";
    }
    else {
        menu.classList.add("showMenu");
        hamburgerMenu.style.display = "none";
        closeIcon.style.display = "block";
        closeIconNyitolap.style.display = "block";
    }
}

hamburgerMenu.addEventListener("click", toggleMenu);



