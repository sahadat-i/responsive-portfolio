/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalView = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalClose = document.querySelectorAll('.services__modal-close');


let modal = function (modalClick) {
    modalView[modalClick].classList.add('active-modal')
}
modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i)
    })
})
modalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalView.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 500
    }
})

/* Link active work */
const linkWork = document.querySelectorAll('.work__item')
function activeWork() {
    linkWork.forEach(l => l.classList.remove('active__work'))
    this.classList.add('active__work')
}
linkWork.forEach(l => l.addEventListener('click', activeWork))

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
       
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive()
{
    const scrollY = window.pageYOffset
    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)
/*=============== LIGHT light THEME ===============*/
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = ()=> document.body.classList(lightTheme) ? 'light' : 'light'
const getCurrentIcon = ()=> document.body.classList(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if(selectedTheme){
    document.body.classList[selectedTheme === 'light' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click',() =>{
    // add or emove the light/item theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // we save theme and the current icon that the user chose
    localStorage.setItem('selectedTheme',getCurrentTheme())
    localStorage.setItem('selectedIcon',getCurrentIcon)
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: '400',
})

sr.reveal('home__data');
