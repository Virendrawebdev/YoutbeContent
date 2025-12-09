let p=document.querySelector('p');
window.addEventListener('keydown',function(dets){
    if(dets.key === " "){
    p.textContent="SPC";
    }else{
    p.textContent=dets.key;
    }  
});