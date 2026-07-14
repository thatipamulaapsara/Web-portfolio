// ================================
// Portfolio JavaScript
// ================================

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form
const form = document.querySelector("#contact form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector("textarea").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert("Thank you, " + name + "! Your message has been sent.");

        form.reset();
    });
}

// Download Resume Button
const resumeBtn = document.querySelector("#home button");

if (resumeBtn) {
    resumeBtn.addEventListener("click", function() {
        window.open("resume.pdf", "_blank");
    });
}

// Highlight active navigation link while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});