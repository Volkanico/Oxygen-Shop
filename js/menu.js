export function setupMenu() {
    const menuToggle = document.querySelector('.navbar__menu-toggle');
    const menuItems = document.querySelector('.navbar__navbar-right__menu-items');
    const closeBtn = document.querySelector('.navbar__close-btn');

    menuToggle.addEventListener('click', function () {
        menuItems.style.display = 'block';
        menuToggle.style.display = 'none';
        closeBtn.style.display = 'inline-block';
    });
    closeBtn.addEventListener('click', function () {
        menuItems.style.display = 'none';
        menuToggle.style.display = 'inline-block';
        closeBtn.style.display = 'none';
    });
}
