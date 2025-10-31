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

// View All news Button
    document.addEventListener('DOMContentLoaded', function() {
        const viewAllButton = document.querySelector('.news-button .btn-secondary');
        const extraNews = document.querySelector('.extra-news');
        let expanded = false;
        
        viewAllButton.addEventListener('click', function() {
            if (!expanded) {
                extraNews.style.display = 'grid';
                viewAllButton.textContent = 'Show Less News';
                expanded = true;
                
                // Scroll to the new content
                extraNews.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                extraNews.style.display = 'none';
                viewAllButton.textContent = 'View All News';
                expanded = false;
            }
        });
    });

    // View All News functionality
function initViewAllNews() {
    const viewAllButton = document.querySelector('.news-button .btn-secondary');
    const extraNews = document.querySelector('.extra-news');
    let expanded = false;

    if (viewAllButton && extraNews) {
        viewAllButton.addEventListener('click', function() {
            if (!expanded) {
                extraNews.style.display = 'grid';
                viewAllButton.textContent = 'Show Less';
                expanded = true;

                // Scroll to the new content
                extraNews.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                extraNews.style.display = 'none';
                viewAllButton.textContent = 'View All News';
                expanded = false;
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const viewAllBtn = document.getElementById('viewAllMembers');
    const extraMembers = document.querySelector('.extra-members');
    
    if (viewAllBtn && extraMembers) {
        viewAllBtn.addEventListener('click', function() {
            const isHidden = extraMembers.style.display === 'none';
            extraMembers.style.display = isHidden ? 'grid' : 'none';
            viewAllBtn.textContent = isHidden ? 'Show Less' : 'See All High Board Members';
        });
    }
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