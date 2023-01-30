const menuTitle = document.querySelector('.menu-title');
const menuClose = document.querySelector('#menu-button');

 menuTitle.addEventListener('click',()=>{
    document.getElementById('menu').style.left = '0';
    menuTitle.style.position = 'absolute';
   menuTitle.style.left = '-300px';
   document.querySelector('.sidebar').style.maxWidth = '30%';
});

menuClose.addEventListener('click', ()=>{
    document.getElementById('menu').style.left = '-30%';
    menuTitle.style.position = 'relative';
    menuTitle.style.left = '0';
   document.querySelector('.sidebar').style.maxWidth = '0';
})