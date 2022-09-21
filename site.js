
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active"
    
        this.handleClick = this.handleClick.bind(this)
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
        })
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass)
        this.mobileMenu.classList.toggle(this.activeClass)
        this.animateLinks()
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent()
        }
        return this
    }
}


const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
)
mobileNavbar.init()


window.onscroll = function() {myFunction()};

var valor = document.getElementById("introduction");
var navbar = document.getElementById("navbar");
var sticky = valor.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// function escrever(elemento) {
//     const textoArray = elemento.innerHTML.split('');
//     elemento.innerHTML = '';
//     textoArray.forEach((letra, i) => {
//         setTimeout(() => {
//             elemento.innerHTML += letra
//         }, 75 * i);
//     });
// }

// const titulo = document.querySelector('.saida');
// //escrever(titulo);

document.addEventListener('DOMContentLoaded', () => {
    
    
    new TypeIt('.animated', {
        speed: 90,
        loop: true
    }).pause(1500).go()

    setTimeout(function(){
        document.querySelector('#code-rigth')
            .classList.toggle('code-color-final'),
        document.querySelector('#code-left')
            .classList.toggle('code-color-final')
    },1800);

    setTimeout(function(){
        document.querySelector('#resumo')
             .classList.toggle('resumo-final'),
        document.querySelector('#linha')
             .classList.toggle('linha-final'),
        document.querySelector('#contato')
            .classList.toggle('contato-final'),
        document.querySelector('#navbar')
            .classList.toggle('menu-final'),
        document.querySelector('#icon-seta')
            .classList.toggle('icon-seta-final'),
        navbar.classList.add("::-webkit-scrollbar-teste")
    },2200);

    setTimeout(function(){
        document.querySelector('#header')
            .classList.toggle('header-final')
    },3000);
})



