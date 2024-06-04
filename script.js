document.addEventListener('DOMContentLoaded', function () {
    const ageForm = document.getElementById('ageForm');
    const ageInput = document.getElementById('age');
    const nameInput = document.getElementById('name');

    ageForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        const age = parseInt(ageInput.value);
        const name = nameInput.value;

        if (isNaN(age) || age < 0) {
            alert('Please enter a valid age.');
            return;
        }

        // Create a promise
        const ageVerificationPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (age >= 18) {
                    resolve(`Welcome, ${name}. You can vote.`);
                } else {
                    reject(`Oh sorry, ${name}. You aren't old enough.`);
                }
            }, 4000); // Wait for 4 seconds
        });

        // Handle promise resolution or rejection
        ageVerificationPromise
            .then((message) => {
                alert(message);
            })
            .catch((error) => {
                alert(error);
            });
    });
});
