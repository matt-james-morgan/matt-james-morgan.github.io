const cursor = document.getElementById('cursor');

document.body.addEventListener('mousemove', function(e){
    cursor.style.top = e.pageY +'px';
    cursor.style.left = e.pageX + 'px';
});
