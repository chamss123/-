window.onload = function(){
    gf.style.display = "none";
    r.style.display = "none";


}

function f(){
    var a1 = document.getElementById("a1");
    if(a1.value == "1"){ 
        var n = 1;
        gf.style.display = "block";
  
    }
    if(a1.value == "2"){
        var n = 0;
        gf.style.display = "block";

    }
    if(a1.value == "3"){
        var n = 0;
        gf.style.display = "block";
 
    }
    if(a1.value == "4"){
        var n = 0;
        gf.style.display = "block";

    }
    if(a1.value == ""){
        alert("il doit etre reponse sur la question");
        gf.style.display = "none";
    }
    if(a1.value >"4"){
        alert("le nombre des choix selement est 4");
        gf.style.display = "none";
    }
    if(a1.value == "0"){
        alert("le nombre 0 n'eat a pas un choix correct");
        gf.style.display = "none";
    }
}

function a (){
        var a2 = document.getElementById("a2");
        var btn = document.getElementById("btn");
        if(a2.value == "1"){ 
            var n = 1;
            r.style.display = "block";
        }
        if(a2.value == "2"){
            var n = 0;
            r.style.display = "block";
        }
        if(a2.value == "3"){
            var n = 0;
            r.style.display = "block";
        }
        if(a2.value == "4"){
            var n = 0;
            r.style.display = "block";
        }
        if(a2.value == ""){
            alert("il doit etre reponse sur la question");
            r.style.display = "none";
        }
        if(a2.value >"4"){
            alert("le nombre des choix selement est 4");
            r.style.display = "none";
        }
        if(a2.value == "0"){
            alert("le nombre 0 n'eat a pas un choix correct");
            r.style.display = "none";
        }
}