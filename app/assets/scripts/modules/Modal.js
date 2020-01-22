import { isNull } from "util";


class Modal {
    constructor() {

        this.modal = document.querySelector('.modal');
        this.modalBtns = document.querySelectorAll('.modal__close-btn');
        this.cardLinks = document.querySelectorAll('.card .card__link');
        this.aboutModalLinks = document.querySelectorAll('.modal__link');
        this.modalBody = document.querySelectorAll('.modal__body');

        if (!isNull(this.modal))
            this.triggerModalEvent();
    }

    triggerModalEvent() {

        this.modalBtns.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleModal();
            })
        });


        this.modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal'))
                this.toggleModal();
        });

        this.cardLinks.forEach((el, i) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                console.log(i);
                this.toggleModal(i);
            })
        });

        this.aboutModalLinks.forEach((el, i) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                console.log(i);
                this.toggleModal(i);
            })
        });
    }

    toggleModal(i) {
        this.modal.classList.toggle("modal--open");
        document.body.classList.toggle('fixed');

        this.modalBody.forEach(item => {
            item.classList.remove('show');
        })
        this.modalBody[i].classList.add('show');

    }

}


export default Modal;