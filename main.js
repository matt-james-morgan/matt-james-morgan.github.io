const menuTitle = document.querySelector('.menu-title');
const menuClose = document.querySelector('#menu-button');
const menuCloseHam = document.querySelector('#menu-button-ham');
const hamColor = document.querySelectorAll('.ham-menu span');
const hamMenu = document.querySelector('.ham-menu');
const sidebar = document.getElementById('sidebar');

//Open side menu in fullscreen
 menuTitle.addEventListener('click',()=>{
    document.getElementById('menu').style.left = '0px';
    menuTitle.style.left = '-10rem';
    sidebar.style.width = '300px';
});

//close side menu in fullscreen
menuClose.addEventListener('click', ()=>{
    document.getElementById('menu').style.left = '-300px';
    menuTitle.style.left = '0';
    sidebar.style.width = '8%';
});

//This loops through the array of span elements of hamburger menu to change their colour to red
hamMenu.addEventListener('mouseover', ()=>{
    for (let i = 0; i< hamColor.length; i++) {
        hamColor[i].style.backgroundColor = '#FF1818';
    }
});
//Loops over the same array as above to change colour back
hamMenu.addEventListener('mouseout', ()=>{
    for (let i = 0; i< hamColor.length; i++) {
        hamColor[i].style.backgroundColor = '#FFC300 ';
    }
});

//On click pulls out side menu in tablet view
hamMenu.addEventListener('click',()=>{
    document.getElementById('menu').style.left = '0px';
    
    hamMenu.style.left = '-30rem';
    
  
    
});

menuCloseHam.addEventListener('click', ()=>{
        document.getElementById('menu').style.left = '-300px'; 
        sidebar.style.width = '8%';
        sidebar.style.minWidth = '8%';
        hamMenu.style.left ='-5%';
});






