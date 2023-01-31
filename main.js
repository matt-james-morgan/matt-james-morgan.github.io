const menuTitle = document.querySelector('.menu-title');
const menuClose = document.querySelector('#menu-button');

 menuTitle.addEventListener('click',()=>{
    document.getElementById('menu').style.left = '0px';
   
    
    menuTitle.style.left = '-30%';
    document.getElementById('sidebar').style.width = '300px';
});

menuClose.addEventListener('click', ()=>{
    document.getElementById('menu').style.left = '-300px';
    menuTitle.style.left = '25%';
    
    document.querySelector('.sidebar').style.width= '8%';
})