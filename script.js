document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navPanel = document.getElementById('mobile-nav-panel');

    if (menuBtn && navPanel) {
        // Toggle mobile panel drawer menu display
        menuBtn.addEventListener('click', () => {
            navPanel.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (navPanel.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu display immediately after hitting a link jump
        document.querySelectorAll('.mobile-nav-panel a').forEach(link => {
            link.addEventListener('click', () => {
                navPanel.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
});
