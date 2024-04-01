import { setupMenu } from './menu.js';
import { setupScroll } from './scroll.js';
import { setupModal } from './modal.js';
import { currencies } from './currencyPrices.js';

document.addEventListener('DOMContentLoaded', function () {
    setupMenu();
    setupScroll();
    setupModal();
    
});

document.querySelector(".pricings__selection__select").addEventListener('change', currencies);
