let menubar=document.querySelector(".menubar");
window.addEventListener('click',function(dets){
    menubar.style.top=dets.clientY +"px";
    menubar.style.left=dets.clientX +"px";
    if(menubar.style.display==="none"){
      menubar.style.display="block";  
    }else{
       menubar.style.display="none"; 
    }
})


// https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}