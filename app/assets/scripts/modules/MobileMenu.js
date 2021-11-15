class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".site-header__menu-icon")
    this.menuContent = document.querySelector(".site-header__menu-content")
    this.siteheader = document.querySelector('.site-header')
    this.events()
  }

  events() {
    this.menuIcon.addEventListener("click", ()=> this.toggleTheMenu())
  }

  toggleTheMenu() {
    this.menuContent.classList.toggle("site-header__menu-content--is-visible")
    this.siteheader.classList.toggle('site-header--is-expanded')
    this.menuIcon.classList.toggle('site-header__menu-icon--close-x')
  }
}

export default MobileMenu;