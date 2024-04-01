export function setupModal() {
    const modal = document.getElementById("myModal");
    const closeButton = document.querySelector(".close");
    const subscribeForm = document.getElementById("subscribeForm");
    const emailInput = document.getElementById("emailInput");
    
    function openModal() {
        modal.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
        sessionStorage.setItem('modalClosed', 'true');
    }

    function handleSubmit(event) {
        event.preventDefault();
        const email = emailInput.value;
        console.log("Email submitted:", email);
        closeModal();
        /*Change storage to LocalStorage for no reappear modal*/
        sessionStorage.setItem('newsletterSubscribed', 'true');
    }

    function handleOutsideClick(event) {
        if (event.target === modal) {
            closeModal();
        }
    }

    function handleEscapeKey(event) {
        if (event.key === "Escape") {
            closeModal();
        }
    }

    function shouldShowModal() {
        if (!sessionStorage.getItem('modalClosed') && !sessionStorage.getItem('newsletterSubscribed')) {
            return true;
        }
        return false;
    }

    function handleScroll() {
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercent >= 25 && shouldShowModal()) {
            openModal();
            window.removeEventListener('scroll', handleScroll);
        }
    }

    setTimeout(function () {
        if (shouldShowModal()) {
            openModal();
            window.removeEventListener('scroll', handleScroll);
        }
    }, 5000);

    window.addEventListener('scroll', handleScroll);
    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);
    subscribeForm.addEventListener('submit', handleSubmit);
}
