const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item')

const handleNav = () => {
    nav.classList.toggle('nav--active')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
        })
    })
}

const footerYear = document.querySelector('.footer-year')

const handleCurrentYear = () => {
	const year = (new Date).getFullYear();
	footerYear.innerText = year;
}

navBtn.addEventListener('click', handleNav);

handleCurrentYear();