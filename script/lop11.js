document.getElementById("show").style.display = "none";

function show(){

    var x = document.getElementById("show");
    if(x.style.display=="block"){
        x.style.display = "none";
    }else{
        x.style.display = "block";
        
    }

    
}

document.getElementById("showlogout").style.display = "none";

function logout(){

    var x = document.getElementById("showlogout");
    if(x.style.display=="none"){
        x.style.display = "block";
    }
}
document.getElementById("showlogout").style.display = "none";
function huy(){
    var y = document.getElementById("showlogout");
    if(y.style.display=="block"){
        y.style.display = "none";
    }   
}
function co(){
    window.location.href = "login.html";
}