
var devis = navigator.userAgent.toLowerCase();
if(devis.includes("android")){
    window.onload = function(){
        main.style.display = "none";
        cc.style.display = "none";
        clocke.style.display = "none";
        trtr.style.display="block";
        hhh.style.display = "none";
        
    }
}
function clockee(){
    var hours=document.getElementById('houre');
    var minutes=document.getElementById('minute');
    var second=document.getElementById('seconde');
    var Milliseconds = document.getElementById("Milliseconds");

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s= new Date().getSeconds();
    hours.innerHTML =s;
    minutes.innerHTML =m;
    second.innerHTML =h;
}
var interval=setInterval(clockee,0000);