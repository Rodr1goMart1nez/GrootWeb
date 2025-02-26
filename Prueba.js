document.addEventListener('DOMContentLoaded', (event) => {
            const form = document.getElementById('main-form');
            const fields = ['tipo-opcion', 'mes-opcion', 'año-opcion', 'modo-opcion', 'conversion-opcion'];

            // Populate form fields with saved values
            fields.forEach(field => {
                const savedValue = localStorage.getItem(field);
                if (savedValue) {
                    document.getElementById(field).value = savedValue;
                }
            });

            // Save form data on submit
            form.addEventListener('submit', () => {
                fields.forEach(field => {
                    const value = document.getElementById(field).value;
                    localStorage.setItem(field, value);
                });
            });
        });
