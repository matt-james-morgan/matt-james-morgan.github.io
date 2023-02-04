const menuTitle = document.querySelector('.menu-title');
const menuClose = document.querySelector('#menu-button');
const hamMenu = document.querySelector('.ham-menu');
const hamMenuColor = document.querySelector('.burg');
//Open side menu
 menuTitle.addEventListener('click',()=>{
    document.getElementById('menu').style.left = '0px';
    menuTitle.style.left = '-30%';
    document.getElementById('sidebar').style.width = '300px';
});

//close side menu
menuClose.addEventListener('click', ()=>{
    document.getElementById('menu').style.left = '-300px';
    menuTitle.style.left = '25%';
    document.querySelector('.sidebar').style.width= '8%';
})

const turnRed = (doc) =>{
    doc.style.backgroundColor = "#FF1818";
}

hamMenu.addEventListener('mouseover', ()=>{
    hamMenuColor.style.backgroundColor = 'red';
}  );
