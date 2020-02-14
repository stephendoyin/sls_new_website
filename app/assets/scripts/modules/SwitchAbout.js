class SwitchAbout {
    constructor() {
        this.aboutMenu = document.querySelectorAll(".home-about__menu-tab");
        this.aboutWrapper = document.querySelectorAll(".home-about-wrapper");
        this.triggerEvent();
    }

    triggerEvent() {
        this.aboutMenu.forEach((el, i) => {
            el.addEventListener('click', (e) => {
                this.switchClass(i)
            })
        })
    }

    switchClass(i) {
        this.aboutMenu.forEach((el, x) => {
            if (i !== x) {
                console.log(x);
                this.aboutMenu[x].classList.remove('active');
                this.aboutWrapper[x].classList.remove('active');
            }

        })
        this.aboutMenu[i].classList.add('active');
        this.aboutWrapper[i].classList.add('active');
    }


}


export default SwitchAbout;