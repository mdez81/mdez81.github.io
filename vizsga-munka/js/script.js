

//hamburger menü
const menu = document.querySelector(".menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const bezaroGomb = document.querySelector(".bezaro-gomb");

const menuKapcsolo = ()=> {
    if(menu.classList.contains("menuMutatas")) {
        menu.classList.remove("menuMutatas");
        hamburgerMenu.style.display = "block";
        bezaroGomb.style.display = "none";
    }
    else {
        menu.classList.add("menuMutatas");
        hamburgerMenu.style.display = "none";
        bezaroGomb.style.display = "block";
    }
}

hamburgerMenu.addEventListener("click", menuKapcsolo);


/* scroll to top button https://codepen.io/OsamaElzero/pen/jwYYXp*/
const gorgetesGomb = $('#tetejere-gorget');

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

//nyitólap duppla kattintása a főlapra ugrik
const nyitolapLink = document.querySelector("nav div.logo a");
const fejlecKep = document.querySelector("header .fejlec-kep");

const folapraUgrik = () => {
  nyitolapLink.href = "../index.html";
 
}

fejlecKep.addEventListener("dblclick", folapraUgrik);


