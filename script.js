const gug = document.getElementById('gug');
const navContainer = document.getElementById('navContainer');

gug.addEventListener('click', () => {
    navContainer.classList.toggle('show');
});
