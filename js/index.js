import { setupMenu } from './menu.js';
import { setupScroll } from './scroll.js';
import { setupModal,  enviarNewsletter } from './modal.js';
import { currencies } from './currencyPrices.js';
import { enviarFormulario } from './form.js';

const form = document.querySelector('.form-section__form');
const newsletter = document.getElementById("newsletter");

document.addEventListener('DOMContentLoaded', function () {
    setupMenu();
    setupScroll();
    setupModal();
});

document.querySelector(".pricings__selection__select").addEventListener('change', currencies);

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (enviarFormulario()) {
        //alert("todo ok")
        form.submit();
        
    }
});

newsletter.addEventListener('submit', function(event){
    event.preventDefault();
    if (enviarNewsletter()) {
        newsletter.submit();
    }
});






