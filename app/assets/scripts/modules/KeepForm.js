class KeepFormStyle {

    constructor() {
        this.contactLabel = document.querySelectorAll('.contact-form__label');
        this.contactInput = document.querySelectorAll('.contact-form__input');
        this.keepStyle();

    }


    keepStyle() {
        this.contactInput.forEach(item => {
            item.addEventListener('blur', function() {
                console.log(item.value)
                if (item.value.trim().length !== 0) {
                    item.nextElementSibling.classList.add('contact-form__label--keep');
                } else {
                    item.nextElementSibling.classList.remove('contact-form__label--keep');
                }
            })
        });
        console.log('working');
    }

}


export default KeepFormStyle;