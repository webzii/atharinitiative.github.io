// Dark/Light Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const logo = document.querySelector('.logo-img'); 

    if (darkModeToggle && logo) {
        // Load saved theme from localStorage
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
            darkModeToggle.checked = true;
            logo.src = 'public/logo-light.png'; // Light mode logo
        } else {
            document.body.classList.remove('light-mode');
            darkModeToggle.checked = false;
            logo.src = 'public/logo-dark.png'; // Dark mode logo
        }

        // Toggle theme on switch change
        darkModeToggle.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
                logo.src = 'public/logo-light.png'; // Switch to light logo
            } else {
                document.body.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark');
                logo.src = 'public/logo-dark.png'; // Switch to dark logo
            }
        });
    }
});

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    // Simulate form submission
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
        alert('Thank you for your message! We\'ll get back to you soon.');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// View All news Button
document.addEventListener('DOMContentLoaded', function() {
    // Select ALL secondary buttons in sections
    const buttons = document.querySelectorAll('section .btn-secondary');

    buttons.forEach(button => {
        const section = button.closest('section');

        // Check for either .extra-members or .extra-news inside that section
        const extraContent =
            section.querySelector('.extra-members') ||
            section.querySelector('.extra-news');

        const pdfButton = section.querySelector('.pdf-button-container');

        if (!extraContent) return;

        button.addEventListener('click', () => {
            const isHidden = extraContent.style.display === 'none' || extraContent.style.display === '';

            // Toggle visibility
            extraContent.style.display = isHidden ? 'grid' : 'none';
            if (pdfButton) pdfButton.style.display = isHidden ? 'block' : 'none';

            // Toggle text
            button.textContent = isHidden
                ? (button.textContent.includes('News') ? 'Show Less News' : 'Show Less')
                : (button.textContent.includes('News') ? 'View All News' : 'See All');
        });
    });
});

// header dropdown
function drop() {
    document.getElementById('dropdown').classList.toggle('show')
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName('dropdowncontent')
        let i
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
