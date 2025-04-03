const hamburger = document.getElementById('hamburger');
const navContainer = document.getElementById('navContainer');

hamburger.addEventListener('click', () => {
    navContainer.classList.toggle('show');
});