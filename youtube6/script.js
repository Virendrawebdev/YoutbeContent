let select =document.querySelector('select');
let h3=document.querySelector('h3');

select.addEventListener('change',function(dets){
    h3.textContent=`${dets.target.value} Selected`;
})