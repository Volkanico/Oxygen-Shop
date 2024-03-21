document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-items');
    const closeBtn = document.querySelector('.close-btn');

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
});
window.addEventListener('resize', function() {
    if (window.innerWidth > 1000) {
        location.reload();
    }
});


  

