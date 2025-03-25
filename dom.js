const hamburgerButton = document.getElementById("hamburger-button");
const crossButton = document.getElementById("cross-button");
const sideMenu = document.getElementById("side-menu");
const sideMenuList = document.getElementById("menu-list");


hamburgerButton.addEventListener('click', () => {
    hamburgerButton.style.display = 'none';
    crossButton.style.display = 'block';
    sideMenu.style.width = '100%';

});

crossButton.addEventListener('click', () => {
    crossButton.style.display = 'none';
    hamburgerButton.style.display = 'flex';
    sideMenu.style.width = '0';
});

sideMenuList.addEventListener('click', () => {
    crossButton.style.display = 'none';
    hamburgerButton.style.display = 'flex';
    sideMenu.style.width = '0';
});

window.addEventListener("load", () => {
    const progressBars = document.querySelectorAll(".progress");
    progressBars.forEach((bar) => {
        const target = parseInt(bar.getAttribute("data-progress"), 10);
        bar.style.width = target + "%";
    });
});


window.addEventListener("load", () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

