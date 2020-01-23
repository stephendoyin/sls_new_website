class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector('.menu-icon');
        this.mobileMenu = document.querySelector(".mobile-menu");
        this.activeLink = document.querySelector('.menu__link--active');
        this.activeLinkMobile = document.querySelector('.mobile-menu__link--active');
        this.allActiveLinks = [this.activeLink, this.activeLinkMobile];
        this.triggerEvent();

    }

    //call all events on menu icon click
    triggerEvent() {
        this.menuIcon.addEventListener('click', () => {
            this.toggleMobileMenu();
        });

        this.allActiveLinks.forEach(item => {

            item.addEventListener('click', (e) => {

                e.preventDefault();
            })
        });



    }

    //prevent active link

    toggleMobileMenu() {
        document.body.classList.toggle('fixed');
        this.menuIcon.classList.toggle('menu-icon--open');
        this.mobileMenu.classList.toggle("mobile-menu--active");
        if (document.querySelector('.menu--down') !== null)
            document.querySelector('.menu--down').classList.toggle('menu--down--no-shadow');
    }




}


export default MobileMenu;