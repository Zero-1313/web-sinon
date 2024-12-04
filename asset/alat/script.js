// Smooth Scrolling Effect
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal Functionality
const modal = document.getElementById("contact-modal");
const btn = document.getElementById("open-modal");
const span = document.getElementById("close-modal");

// When the user clicks the button, open the
