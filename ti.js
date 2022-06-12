function add(){
    var li = document.createElement("LI");
    var input = document.getElementById("input").value;
    var text = document.createTextNode(input);
    li.appendChild(text);
    document.getElementById("list").appendChild(li);
}

function addd(){
    var li = document.createElement("LI");
    var input1 = document.getElementById("input1").value;
    var text = document.createTextNode(input1);
    li.appendChild(text);
    document.getElementById("liste").appendChild(li);
}


