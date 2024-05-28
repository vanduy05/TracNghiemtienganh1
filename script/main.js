var checkbox_toggle=document.getElementById('ligh-dark');
checkbox_toggle.addEventListener('change',function(){
    
    document.body.classList.toggle('dark');
});





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
    if(x.style.display = "none"){
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
    window.location.href = "index.html";
}


 function checkform(){



    var ten=document.getElementById('ten');
    if(ten.value==""){
        alert("Vui lòng nhập tên đăng nhập");
        ten.focus();
        return false;   
    }
    var pass=document.getElementById('pass');
    if(pass.value==""){
        alert("Vui lòng nhập mật khẩu đăng nhập");
        pass.focus();   
        return false;   
    }
    var email=document.getElementById('email');
    if(email.value==""){
        alert("Vui lòng nhập email");
        email.focus();
        return false;   
    }
return true;    
 }



