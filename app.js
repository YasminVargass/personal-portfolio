let typed = new Typed('.typed-name', {
    strings: ['Yasmin Vargas!'],
    typeSpeed: 100,
  });


 class MobileNavBar{

constructor(mobileMenu, navBar, mobileLinks, html){

this.mobileMenu = document.querySelector(mobileMenu);
this.navBar = document.querySelector(navBar);
this.mobileLinks = document.querySelector(mobileLinks);
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


handleClick(){
  this.navBar.classList.toggle(this.activeClass);
  this.mobileMenu.classList.toggle(this.activeClass);

  const currentOverflow = this.html.style.overflow;
    
  if (currentOverflow == "hidden") {
    this.html.style.overflow = "auto";
  } else {
    this.html.style.overflow = "hidden";
  }

  }



addClickEvent(){
  this.mobileMenu.addEventListener("click", this.handleClick)
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