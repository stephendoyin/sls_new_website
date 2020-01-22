class Menu {

    constructor() {
        this.prevScrollpos = window.pageYOffset;
        this.navBar = document.querySelector('.menu');
        this.scrollTrigger();
    }



    //animate menu icon
    animateIcon() {
        this.menuIcon.classList.toggle('menu-icon--open');
        console.log('working')
    }

    //toggle menu on scroll (based on position)
    scrollTrigger() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 60) {
                this.toggleNavBar();
            } else if (window.pageYOffset < 60) {
                this.navBar.classList.remove('menu--up');
                this.navBar.classList.remove('menu--down');
            }

        })
    }

    //toggle menu (based on direction)
    toggleNavBar() {
        this.currentScrollPos = window.pageYOffset;
        if (this.prevScrollpos > this.currentScrollPos) {

            this.navBar.classList.remove('menu--up');
            this.navBar.classList.add('menu--down');
        } else {
            this.navBar.classList.add('menu--up');
            this.navBar.classList.remove('menu--down');
        }

        this.prevScrollpos = this.currentScrollPos;
    }


}


export default Menu;