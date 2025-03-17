
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('form-status').innerText = "Thank you for reaching out! We'll get back to you soon.";
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('form-status').innerText = "Please fill out all fields.";
        document.getElementById('form-status').style.color = 'red';
    }
}
