let typed = new Typed('.typed-name', {
    strings: ['Yasmin Vargas!'],
    typeSpeed: 100,
  });


 class MobileNavBar{

constructor(mobileMenu, navBar, mobileLinks, html){

this.mobileMenu = document.querySelector(mobileMenu);
this.navBar = document.querySelector(navBar);
this.mobileLinks = document.querySelectorAll(mobileLinks);
this.html = document.querySelector(html);
this.activeClass = "active";

this.handleClick = this.handleClick.bind(this);
}

animateLinks() {
  this.navLinks.forEach((link, index) => {
    link.style.animation
      ? (link.style.animation = "")
      : (link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`);
  });
}


handleClick(event){
  this.navBar.classList.toggle(this.activeClass);
  this.mobileMenu.classList.toggle(this.activeClass);

  const currentOverflow = this.html.style.overflow;
  
  this.html.style.overflow = this.overflowHidden ? "auto" : "hidden";
  this.overflowHidden = !this.overflowHidden; // Inverte o valor da variável de estado

  event.stopPropagation(); // Impede a propagação do evento de clique do menu móvel
}

  

addClickEvent(){
  this.mobileMenu.addEventListener("click", this.handleClick);
  this.mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      this.navBar.classList.remove(this.activeClass);
      this.mobileMenu.classList.remove(this.activeClass);

      // Sempre definir overflow como "auto" quando um link é clicado
      this.html.style.overflow = "auto";
      this.overflowHidden = false; // Redefine a variável de estado para "false"
    });
  });
}

init(){
if(this.mobileMenu){
  this.addClickEvent();
}
return this;

}


 }

 const mobileNavBar = new MobileNavBar(
".mobile-menu",
".navbar",
".navbar a",
"html"
 )

 mobileNavBar.init();