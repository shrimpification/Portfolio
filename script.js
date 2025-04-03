const gug = document.getElementById('hamburger');
const navContainer = document.getElementById('navContainer');

gug.addEventListener('click', () => {
    navContainer.classList.toggle('show');
});
