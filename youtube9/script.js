let box = document.querySelector('.box');
let img =document.querySelector('img');
let h1 =document.querySelector('h1');

box.addEventListener('mouseover',function(){
    box.style.backgroundColor="red";
})

box.addEventListener('mouseout',function(){
    box.style.backgroundColor="yellow";
})

window.addEventListener('mousemove',function(dets){
   img.style.left=dets.clientX +"px";
    img.style.top=dets.clientY +"px";
    h1.style.left=dets.clientX +"px";
    h1.style.top=dets.clientY +"px";
})