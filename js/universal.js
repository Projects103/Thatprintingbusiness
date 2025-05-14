fetch('menu.html')
        .then(response => response.text())
        .then(html => {
        document.getElementById('menu-placeholder').innerHTML = html;
        });

function toggleMobileMenu() {
    const menu = document.querySelector('.collapsible-menu-mobile');
    const closeButton = document.querySelector('.collapsible-menu-mobile-close');
    const isOpen = menu.classList.contains('open');

    if (isOpen) {
    menu.style.height = '0';
    closeButton.style.display = 'none';
    menu.classList.remove('open');
    setTimeout(() => {
        menu.style.visibility = 'hidden';
    }, 250);
    } else {
    menu.style.visibility = 'visible';
    menu.style.height = 'auto';
    const fullHeight = menu.scrollHeight + "px";
    menu.style.height = '0';
    void menu.offsetHeight; // Force reflow
    menu.style.height = fullHeight;
    closeButton.style.display = 'block';
    menu.classList.add('open');
    }
}