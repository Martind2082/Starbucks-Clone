const menu = document.getElementById('mobile_menu');
const info = document.querySelector('.mobile_nav_info');

console.log(menu, info);
menu.addEventListener('click', () => {
    info.classList.toggle('slidein');
    document.querySelector('html').classList.toggle('hiddenscroll');
})