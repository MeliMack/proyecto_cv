
document.getElementById('experiencia').onclick=function(){
    window.location.hash="experiencia";
};


document.getElementById('habilidades').onclick=function(){
 window.location.hash="habilidades_cv";
};

document.getElementById('volver').onclick=function(){
    document.documentElement.scrollTop = 0;   
};
  
document.getElementById('volver2').onclick=function(){
    document.documentElement.scrollTop = 0;   
};

 document.getElementById('experiencia').addEventListener('click',function(){
    document.getElementById("Experiencialaboral").style.background = "lightblue";
});

document.getElementById('habilidades').addEventListener('click',function(){
    document.getElementById("habilidades_cv").style.background = "lightblue";
});


document.getElementById('volver').addEventListener('click',function(){
    document.getElementById("Experiencialaboral").style.background = "none";
});
document.getElementById('volver2').addEventListener('click',function(){
    document.getElementById("habilidades_cv").style.background = "none";
});


document.getElementById('infopersonal').addEventListener('mouseover',function(){
    document.getElementById("infopersonal").style.fontWeight="bold";
});

document.getElementById('infopersonal2').addEventListener('mouseover',function(){
    document.getElementById("infopersonal2").style.fontWeight="bold";
});
document.getElementById('infopersonal3').addEventListener('mouseover',function(){
    document.getElementById("infopersonal3").style.fontWeight="bold";
});
document.getElementById('infopersonal4').addEventListener('mouseover',function(){
    document.getElementById("infopersonal4").style.fontWeight="bold";
});
document.getElementById('infopersonal5').addEventListener('mouseover',function(){
    document.getElementById("infopersonal5").style.fontWeight="bold";
});