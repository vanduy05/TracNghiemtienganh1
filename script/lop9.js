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


document.getElementById("point").style.display = "none";
document.getElementById("showansewr1").style.display = "none";

var dapanA = document.createElement;
var dapanB = document.createElement;

var dapanC = document.createElement;

var dapanD = document.createElement;
function cau1() {
    var cau1 = document.getElementById("cau1");
    dapanA = cau1.querySelector('input[id="dapanA"]:checked');
    // var dapanB = cau1.querySelector('input[id="dapanB"]:checked');
    // var dapanC = cau1.querySelector('input[id="dapanC"]:checked');
    // var dapanD = cau1.querySelector('input[id="dapanD"]:checked');

    if (!dapanA) {
        document.getElementById("point").style.display = "none";
        alert("Đáp án của bạn đã sai");
        
    }
    else  {
        // show điểm
        var x = document.getElementById("point");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr1");
        if(y.style.display=="none"){
            y.style.display = "block";
        }   
    
    }

}
document.getElementById("loigiai1").style.display="none";
function showanswer1(){
    var loigiai1 = document.getElementById("loigiai1");
    if(loigiai1.style.display=="none"){
        loigiai1.style.display = "block";
    }
    else{
        loigiai1.style.display = "none";
    }
}
// ===========2=======================

document.getElementById("point2").style.display = "none";
document.getElementById("showansewr2").style.display = "none";
function cau2(){
    var cau2 = document.getElementById("cau2");
    dapanA = cau2.querySelector('input[id="dapanA"]:checked');

    if (!dapanA){
        document.getElementById("point2").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point2");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr2");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}

document.getElementById("loigiai2").style.display="none";
function showanswer2(){
    var loigiai2 = document.getElementById("loigiai2");
    if(loigiai2.style.display=="none"){
        loigiai2.style.display = "block";
    }
    else{
        loigiai2.style.display = "none";
    }
}
// ===========3=======================
document.getElementById("point3").style.display = "none";
document.getElementById("showansewr3").style.display = "none";
function cau3(){
    var cau3 = document.getElementById("cau3");
    dapanB = cau3.querySelector('input[id="dapanB"]:checked');

    if (!dapanB){
        document.getElementById("point3").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point3");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr3");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}
document.getElementById("loigiai3").style.display="none";
function showanswer3(){
    var loigiai3 = document.getElementById("loigiai3");
    if(loigiai3.style.display=="none"){
        loigiai3.style.display = "block";
    }
    else{
        loigiai3.style.display = "none";
    }
}
// ===========4=======================

document.getElementById("point4").style.display = "none";
document.getElementById("showansewr4").style.display = "none";
function cau4(){
    var cau4 = document.getElementById("cau4");
    dapanC = cau4.querySelector('input[id="dapanC"]:checked');

    if (!dapanC){
        document.getElementById("point4").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point4");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr4");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}
document.getElementById("loigiai4").style.display="none";
function showanswer4(){
    var loigiai4 = document.getElementById("loigiai4");
    if(loigiai4.style.display=="none"){
        loigiai4.style.display = "block";
    }
    else{
        loigiai4.style.display = "none";
    }
}
// ===========5=======================
document.getElementById("point5").style.display = "none";
document.getElementById("showansewr5").style.display = "none";
function cau5(){
    var cau5 = document.getElementById("cau5");
    dapanD = cau5.querySelector('input[id="dapanD"]:checked');

    if (!dapanD){
        document.getElementById("point5").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point5");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr5");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}
document.getElementById("loigiai5").style.display="none";
function showanswer5(){
    var loigiai5 = document.getElementById("loigiai5");
    if(loigiai5.style.display=="none"){
        loigiai5.style.display = "block";
    }
    else{
        loigiai5.style.display = "none";
    }
}




// /========================================================

