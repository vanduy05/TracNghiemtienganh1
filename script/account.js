function signup(){
    event.preventDefault();
    var username = document.getElementById("username").value; // Lấy giá trị tên đăng nhập từ trường nhập liệu
    var password = document.getElementById("password").value; // Lấy giá trị mật khẩu từ trường nhập liệu
    var email = document.getElementById("email").value; // Lấy giá trị email từ trường nhập liệu

    var user = {
        username: username,
        password: password,
        email: email
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username,json);
    alert("Đăng ký thành công");
    window.location.href = "login.html";
}

function login(){
    event.preventDefault();
    var username = document.getElementById("username").value; // Lấy giá trị tên đăng nhập từ trường nhập liệu
    var password = document.getElementById("password").value; // Lấy giá trị mật khẩu từ trường nhập liệu
    var email = document.getElementById("email").value; // Lấy giá trị email từ trường nhập liệu
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if(user==null)
    {
        alert("Vui lòng nhập tên đăng nhập và mật khẩu");
    }
    else if(username == data.username && email == data.email && password == data.password)
    {
        alert("Đăng nhập thành công");
        window.location.href = "main.html";
    }
    else{
        alert("Tài khoản không tồn tại")

    }
}
function checksignup(){



    var ten=document.getElementById('username');
    if(ten.value==""){
        alert("Vui lòng nhập tên ");
        ten.focus();
        return false;   
    }
    var pass=document.getElementById('password');
    if(pass.value==""){
        alert("Vui lòng nhập mật khẩu");
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


