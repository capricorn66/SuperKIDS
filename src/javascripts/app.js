class NavToggle {
    constructor() {
        this.navBtn = document.querySelector('[data-nav-toggle]')
        this.closeBtn = document.querySelector('[data-nav-close]')
        this.navMenu = document.querySelector(this.navBtn.dataset.navToggle)

        this.navBtn.addEventListener('click', e => this.toggleMenu())
        this.closeBtn.addEventListener('click', e => this.toggleMenu())

    }
    toggleMenu() {
        this.navMenu.classList.toggle('-translate-y-full')
        this.navMenu.classList.toggle('translate-y-0')
    }
}


document.addEventListener('DOMContentLoaded', function(){

    new NavToggle()

}, false);

