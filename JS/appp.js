document.addEventListener('DOMContentLoaded', function () {
    const formElement = document.querySelector('form');
    const patterns = {
        firstName: /^[a-zA-Z]{2,}$/,
        lastName: /^[a-zA-Z]{2,}$/,
        email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    };

    for (let field in patterns) {
        const inputElement = document.getElementById(field);
        const helpTextElement = document.getElementById(field + 'Val');

        inputElement.addEventListener('keyup', function () {
            const value = this.value;
            const isValid = patterns[field].test(value);

            if (isValid) {
                helpTextElement.textContent = field === 'email' ? 'Email' : (field.charAt(0).toUpperCase() + field.slice(1)) + ' (ainult tähed)';
                helpTextElement.classList.remove('text-danger');
                helpTextElement.classList.add('text-muted');
            } else {
                helpTextElement.textContent = field === 'email' ? 'Ei vasta emaili mustrile!' : 'Ei vasta mustrile!';
                helpTextElement.classList.remove('text-muted');
                helpTextElement.classList.add('text-danger');
            }
        });
    }

    formElement.addEventListener('submit', function (e) {
        e.preventDefault();
        // Siia saab lisada vajadusel edasisi tegevusi, kui soovitakse vormi saatmist takistada või kui kõik väljad on korrektsed.
    });
});
