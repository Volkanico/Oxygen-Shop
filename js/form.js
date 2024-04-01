const nameLabel = document.querySelector(".form-section__form__name__label");
const nameInput = document.querySelector(".form-section__form__name__input");
const emailLabel = document.querySelector(".form-section__form__email__label");
const emailInput = document.querySelector(".form-section__form__email__input");
const checkbox = document.querySelector(".form__policy__check__checkbox");

export function enviarFormulario() {
    let isNameValid = validateInput(nameInput, nameLabel);
    let isEmailValid = validateEmail(emailInput.value.trim());
    let isCheckboxChecked = checkbox.checked;
    if (!isCheckboxChecked) {
        checkbox.style.outlineColor = 'red';
        checkbox.style.outlineStyle = 'solid';
        checkbox.style.outlineWidth = '2px';
        return false; 
    } else {
        checkbox.style.outline = '';
    }
    
    return isNameValid && isEmailValid && isCheckboxChecked;
}

function validateInput(input, label) {
    const inputValue = input.value.trim();
    const lettersRegex = /^[a-zA-Z]{2,100}$/;

    if (inputValue === '' || !lettersRegex.test(inputValue)) {
        label.style.color = 'red';
        input.style.borderColor = 'red';
        input.style.borderWidth = '3px';
        input.style.borderStyle = 'solid';
        return false;
    } else {
        label.style.color = '';
        input.style.borderColor = '';
        input.style.borderWidth = '';
        input.style.borderStyle = '';
        return true;
    }
}


function validateEmail(email) {
    const emailRegex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
    if (!emailRegex.test(String(email).toLowerCase())) {
        emailLabel.style.color = 'red';
        emailInput.style.borderColor = 'red';
        emailInput.style.borderWidth = '3px';
        emailInput.style.borderStyle = 'solid';
        return false;
    } else {
        emailLabel.style.color = '';
        emailInput.style.borderColor = '';
        emailInput.style.borderWidth = '';
        emailInput.style.borderStyle = '';
        return true;
    }
}


export function enviarDatos() {
    const formData = {
        /*title: 'foo',
        body: 'bar',
        userId: 1*/
        name: nameInput.value,
        email: emailInput.value
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => {
        if (response.ok) {
            console.log('Los datos se enviaron correctamente');
            return response.json();
        } else {
            throw new Error('Error al enviar datos');
        }
    })
    .then((json) => {
        console.log(json);
    })
    .catch((error) => console.error('Error al enviar datos:', error));
}