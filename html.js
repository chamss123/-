var name1 = document.getElementById("name1");
var ville1 = document.getElementById("ville1");
var pays1 = document.getElementById("pays1");
var age = document.getElementById("age");
var phone1 = document.getElementById("phone1"); 
var err = document.getElementById("err");
var password = document.getElementById("password");
var email = document.getElementById("email");
window.onload = function(){
    childer_panel.style.display = "none";
}
function onlyEnglishString(e){
    var charCode = e.charCode
    if((charCode > 64 && charCode <91 )|| // A- Z
        (charCode > 96 && charCode < 123) || // a-z
        charCode == 8 || charCode == 46 || charCode == 32){
            return true;
    }
    else{
        e.preventDefault();
        return false;
    }
}
name1.addEventListener('keypress',function(e){
    var result = onlyEnglishString (e);
    if (result == false){
        alert("عفوا الرجاء كتابة الاسم باللغة الفرنسية أو الانجليزية فقط ");
    }
    else{
        removeAlert();
    }
});
function onlyinteger (e){
    var charCode = e.charCode
    if(charCode >= 48 && charCode <= 57){
        return true;
    }
    else{
        e.preventDefault();
        return false;
    }
}
age.addEventListener('keypress', function(e){
    var result = onlyinteger (e);
    if(result==false){
        alert('عفوا الرجاء كتابة الأرقام فقط');
    }
});
phone1.addEventListener('keypress',function(e){
    var result = onlyinteger(e);
    if (result == false) {
        alert("الرجاء ملء خانة الهاتف بالأرقام فقط");
        
    }
});
function ddl_value(ddl_name, panel_name , valueArray){
    for(i = 0; i<valueArray.length;i++ ){
        var thevalue = valueArray[i];
        if(ddl_name.value =  thevalue){
            panel_name.style.display ="block";
            break;
        }
        else{
            panel_name.style.display ="none";
        }
    }
}
pays1.addEventListener('change',function(){
    ddl_value(ville1,childer_panel,[1,2,3])
});
if(age<10){
    alert("موقعنا غير مناسب للأطفال أعل من 10 سنوات وشكرا");
}
else{
}
