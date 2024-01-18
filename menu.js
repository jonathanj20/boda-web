const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');
const nav = document.getElementById('nav');
const links = document.querySelectorAll('.link-nav')

btnOpen.addEventListener("click", () => {
    nav.style.display = 'block';
    btnClose.style.display = 'block'
    btnOpen.style.display = 'none';
});

btnClose.addEventListener("click", () => {
    btnOpen.style.display = 'block';
    nav.style.display = 'none';
    btnClose.style.display = 'none';
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.style.display = 'none';
        btnClose.style.display = 'none';
        btnOpen.style.display = 'block';
    });
});

