window.onload = function(){
    cvv.style.display = "block";
    main.style.display="none";
    sss.style.display="none";
    ppp.style.display="none";
    pp.style.display="block";
    ppppp.style.display="none";
    pppp.style.display="block";
}
function f(){
var s= document.getElementById("s");
if(s.value==""){
    alert("المرجوا إدخال ملف الإجابة في الخانة المناسبة");
    return false;
}else{
    cvv.style.display="none";
    main.style.display="block";
    pp.style.display="none";
    ppp.style.display="block";
}
}
var d= document.getElementById("d");
d.addEventListener("click",()=>{
    alert("هل تريد الإكمال");
});
function n(){
    var v= document.getElementById("v");
    if(v.value==""){
        alert("المرجوا إدخال ملف الإجابة في الخانة المناسبة");
        return false;
    }else{
        sss.style.display="block";
        ppppp.style.display="block";
        pppp.style.display="none";
    }
    }
    var a= document.getElementById("a");
    d.addEventListener("click",()=>{
        alert("هل تريد الإكمال");
    });
    function btn(){
        if(s.value==""){
               cvv.style.display="block";
                main.style.display="none";
                pp.style.display="block";
                ppp.style.display="none";
            alert("المرجوا الاجابة عن السؤال الأول");
            return false;
        }
        if(v.value==""){
            ppppp.style.display="none";
            pppp.style.display="block";
            alert("المرجوا الإجابة عن السؤال الثاني");
            return false;
        }
    }