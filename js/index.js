import { setupMenu } from './menu.js';
import { setupScroll } from './scroll.js';
import { setupModal } from './modal.js';

document.addEventListener('DOMContentLoaded', function () {
    setupMenu();
    setupScroll();
    setupModal();
});
