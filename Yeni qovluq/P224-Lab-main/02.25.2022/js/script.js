// accordion

const headers1 = document.querySelectorAll('.accordion-wrapper1 .header');
for (let header of headers1) {
    header.onclick = function() {
        let activeBody = document.querySelector('.body-active');
        let activeHeader = document.querySelector('.header-active');
        if (this.classList.contains('header-active')) {
            console.log('Aktiv idi');
            activeBody.classList.remove('body-active');
            activeHeader.classList.remove('header-active');
        } else {
            console.log('Aktiv deyildi');
            if (activeHeader) {
                console.log('Basqa aktiv movcuddur');
                activeBody.classList.remove('body-active');
                activeHeader.classList.remove('header-active');
            }
            this.classList.add('header-active');
            this.nextElementSibling.classList.add('body-active');
        }
    }
}

const headers2 = document.querySelectorAll('.accordion-wrapper2 .header');

for (let header of headers2) {
    header.onclick = function() {
        if (this.classList.contains('header-active')) {
            this.classList.remove('header-active');
            this.nextElementSibling.classList.remove('body-active');
        } else {
            this.classList.add('header-active');
            this.nextElementSibling.classList.add('body-active');
        }
    }
}

// modal

const btn = document.getElementById('btn-modal');
const closeBtn = document.getElementById('modal-close');
const modal = document.querySelector('.custom-modal');
const overlay = document.querySelector('.overlay');

btn.onclick = () => {
    modal.classList.toggle('visible');
    overlay.classList.toggle('visible');
}

closeBtn.onclick = () => {
    modal.classList.toggle('visible');
    overlay.classList.toggle('visible');
}

overlay.onclick = () => {
    modal.classList.toggle('visible');
    overlay.classList.toggle('visible');
}