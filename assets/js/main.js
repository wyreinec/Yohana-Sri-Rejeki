/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.achievements__modal'),
      modalBtns = document.querySelectorAll('.achievements__button'),
      modalCloses = document.querySelectorAll('.achievements__modal-close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        modal(i);
    });
});

modalCloses.forEach((close) => {
    close.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener('click', activeWork))

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".timeline__container", {
    spaceBetween: 24,
    loop: true,
    grapCursor: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    effect: 'slide',
    speed: 800,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView:2,
            spaceBetween: 48,
        },
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, {delay: 700})
sr.reveal(`.home__social, .home__scroll`, {delay: 900, origin: 'bottom'})
sr.reveal(`.about__img`, {distance: '40px',origin: 'bottom',opacity: 0,duration: 1000,easing: 'ease',delay: 200})
sr.reveal('.about__description', {distance: '20px',origin: 'bottom',opacity: 0,duration: 1000,easing: 'ease',delay: 400});
sr.reveal('.about__img', {scale: 0.95,opacity: 0,duration: 1000,delay: 100,easing: 'ease-in-out'});
sr.reveal('.section__title, .section__subtitle', {distance: '20px',origin: 'top',opacity: 0,duration: 800,interval: 100,easing: 'ease-out'});
sr.reveal(`.about__box, .skills__content, .contact__content`, {delay: 200, distance: '40px', origin: 'bottom', duration: 800, easing: 'ease-out', interval: 200})
sr.reveal('.timeline__dot', {scale: 0.8,opacity: 0,duration: 800,easing: 'ease-in-out',interval: 200,delay: 100});
sr.reveal('.timeline__item', {distance: '30px',origin: 'bottom',opacity: 0,duration: 1000,easing: 'ease-in-out', interval: 200});
// sr.reveal(`.achievements__modal:not(.no-animation)`, {delay: 700, origin: 'bottom'})
  

  
// sr.reveal(`.about__data`, {delay: 700, origin: 'right'})
// sr.reveal(`.skills__content`, {delay: 700, origin: 'bottom'})
// sr.reveal(`.achievements__card`, {delay: 700, origin: 'bottom'})
// sr.reveal(`.achievements__card`, {delay: 700, origin: 'bottom'})
// sr.reveal('.work__item:nth-child(1)', { delay: 200 });
// sr.reveal('.work__item:nth-child(2)', { delay: 400 });
// sr.reveal('.work__item:nth-child(3)', { delay: 600 });
// sr.reveal('.work__item:nth-child(4)', { delay: 800 });
// sr.reveal('.work__item:nth-child(5)', { delay: 1000 });
// sr.reveal(`.work__card`, {delay: 700, origin: 'bottom'})
// sr.reveal(`.contact__content:not(.no-animation)`, {delay: 700, origin: 'bottom'})




