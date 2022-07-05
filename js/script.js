const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.nav');
const body = document.body;

if (burger && nav) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('lock');
    })

    nav.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener("click", () => {
            burger.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('lock');
        })
    })
}