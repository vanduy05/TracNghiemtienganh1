
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
    if(x.style.display=="block"){
        x.style.display = "none";
    }else{
        x.style.display = "block";
        
    }

    
}

function huy(){
    logout();
    
}
function co(){
    window.location.href = "login.html";
}


   

document.getElementById("formlogin").addEventListener("button", function(event) {
    event.preventDefault();

    var username = document.getElementById("ten").value; // Lấy giá trị tên đăng nhập từ trường nhập liệu
    
    // Chuyển hướng sang trang account và truyền tên đăng nhập bằng cách thêm vào URL
    window.location.href = "main.html?ten=" + encodeURIComponent(username);
});
var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('ten');
document.getElementById("username").textContent = username; 

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



