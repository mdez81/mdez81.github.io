const menu = document.querySelector(".menu");
//const menuItem = document.querySelector(".menuItem");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const bezaroGomb = document.querySelector(".bezaro-gomb");
//const bezaroGombNyitolap = document.querySelector(".bezaro-gomb-nyito");
//const logo = document.querySelector(".logo a");

const menuKapcsolo = ()=> {
    if(menu.classList.contains("menuMutatas")) {
        menu.classList.remove("menuMutatas");
        hamburgerMenu.style.display = "block";
        bezaroGomb.style.display = "none";
        //bezaroGombNyitolap.style.display = "none";
    }
    else {
        menu.classList.add("menuMutatas");
        hamburgerMenu.style.display = "none";
        bezaroGomb.style.display = "block";
        //bezaroGombNyitolap.display = "block";
        //logo.style.display ="block";
    }
}

hamburgerMenu.addEventListener("click", menuKapcsolo);


/* scroll to top button https://codepen.io/OsamaElzero/pen/jwYYXp*/
const gorgetesGomb = $('#tetejereGorget');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    gorgetesGomb.addClass('show');
  } else {
    gorgetesGomb.removeClass('show');
  }
});

gorgetesGomb.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



