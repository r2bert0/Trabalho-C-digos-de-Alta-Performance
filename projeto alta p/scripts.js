function toggleMenu() {
    const slideMenu = document.querySelector('.slide-menu');
    slideMenu.classList.toggle('active');
}

const cb = document.getElementById('cb')

cb.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})