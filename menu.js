const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');
const nav = document.getElementById('nav');

btnOpen.addEventListener("click", () => {
    nav.style.display = 'block';
});

btnClose.addEventListener("click", () => {
    nav.style.display = 'none';
});