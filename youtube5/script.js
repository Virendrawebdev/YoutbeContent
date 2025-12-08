let p=document.querySelector('p');
let inp=document.querySelector('input');

inp.addEventListener('input',function(dets){
    if (dets.data ===null){
    p.innerHTML=dets.target.value
    }else{
       p.innerHTML=dets.target.value  
    }
})