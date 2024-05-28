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



document.getElementById("reading").style.display = "none";
function openreading(){
    var x = document.getElementById('reading');
    if(x.style.display=="block"){
        x.style.display = "none";
    }
    else{
        x.style.display = "block";
    }
}

function offreading(){
    openreading()
}
// =================================================
document.getElementById("readingTF").style.display = "none";
function openreadingTF(){
    var x = document.getElementById('readingTF');
    var y = document.getElementById('dichreadingTF');
    if( x.style.display = "none"){
       x.style.display = "block";
        y.style.display = "none";
    }
    
}

function offreadingTF(){
    var x = document.getElementById("readingTF");
    if( x.style.display = "block"){
        x.style.display = "none";
    }
}
// ======================================================
document.getElementById("dichreadingTF").style.display = "none";
function OnreadingTF(){
    var x = document.getElementById('readingTF');
    var y = document.getElementById('dichreadingTF');
    if(y.style.display=="block"){
        y.style.display = "none";
        x.style.display = "block";
    }
    else{
        y.style.display = "block";
        x.style.display = "none";
    }
}

function offdichreadingTF(){
    OnreadingTF();
}



// /========================================================
// /========================================================
// /========================================================
// /========================================================
// /========================================================
// /========================================================


var dapanA = document.createElement;
var dapanB = document.createElement;
var dapanC = document.createElement;
var dapanD = document.createElement;

document.getElementById("point").style.display = "none";
document.getElementById("showansewr1").style.display = "none";
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
// ===========================6
document.getElementById("point6").style.display = "none";
document.getElementById("showansewr6").style.display = "none";
function cau6(){
    var cau6 = document.getElementById("cau6");
    dapanC = cau6.querySelector('input[id="dapanC"]:checked');

    if (!dapanC){
        document.getElementById("point6").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point6");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr6");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}

document.getElementById("loigiai6").style.display="none";
function showanswer6(){
    var loigiai6 = document.getElementById("loigiai6");
    if(loigiai6.style.display=="none"){
        loigiai6.style.display = "block";
    }
    else{
        loigiai6.style.display = "none";
    }
}
// ===========================7
document.getElementById("point7").style.display = "none";
document.getElementById("showansewr7").style.display = "none";
function cau7(){
    var cau7 = document.getElementById("cau7");
    dapanD = cau7.querySelector('input[id="dapanD"]:checked');

    if (!dapanD){
        document.getElementById("point7").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point7");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr7");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}
document.getElementById("loigiai7").style.display="none";
function showanswer7(){
    var loigiai7 = document.getElementById("loigiai7");
    if(loigiai7.style.display=="none"){
        loigiai7.style.display = "block";
    }
    else{
        loigiai7.style.display = "none";
    }
}
// ================================8
document.getElementById("point8").style.display = "none";
document.getElementById("showansewr8").style.display = "none";
function cau8(){
    var cau8 = document.getElementById("cau8");
    dapanB = cau8.querySelector('input[id="dapanB"]:checked');

    if (!dapanB){
        document.getElementById("point8").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point8");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr8");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}
document.getElementById("loigiai8").style.display="none";
function showanswer8(){
    var loigiai8 = document.getElementById("loigiai8");
    if(loigiai8.style.display=="none"){
        loigiai8.style.display = "block";
    }
    else{
        loigiai8.style.display = "none";
    }
}
// ===============================9
document.getElementById("point9").style.display = "none";
document.getElementById("showansewr9").style.display = "none";
function cau9(){
    var cau9 = document.getElementById("cau9");
    dapanD = cau9.querySelector('input[id="dapanD"]:checked');

    if (!dapanD){
        document.getElementById("point9").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point9");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr9");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}

document.getElementById("loigiai9").style.display="none";
function showanswer9(){
    var loigiai9 = document.getElementById("loigiai9");
    if(loigiai9.style.display=="none"){
        loigiai9.style.display = "block";
    }
    else{
        loigiai9.style.display = "none";
    }
}
// ========================10
document.getElementById("point10").style.display = "none";
document.getElementById("showansewr10").style.display = "none";
function cau10(){
    var cau10 = document.getElementById("cau10");
    dapanC = cau10.querySelector('input[id="dapanC"]:checked');

    if (!dapanC){
        document.getElementById("point10").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point10");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr10");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}

document.getElementById("loigiai10").style.display="none";
function showanswer10(){
    var loigiai10 = document.getElementById("loigiai10");
    if(loigiai10.style.display=="none"){
        loigiai10.style.display = "block";
    }
    else{
        loigiai10.style.display = "none";
    }
}
// /========================================================


// 10 chức năng//

// /========================================================
// /========================================================
// /========================================================
// /========================================================


// /==============11==========================================

document.getElementById("point11").style.display = "none";
document.getElementById("showansewr11").style.display = "none";
function cau11() {
    var cau11 = document.getElementById("cau11");
    dapanC = cau11.querySelector('input[id="dapanC"]:checked');
    // var dapanB = cau1.querySelector('input[id="dapanB"]:checked');
    // var dapanC = cau1.querySelector('input[id="dapanC"]:checked');
    // var dapanD = cau1.querySelector('input[id="dapanD"]:checked');

    if (!dapanC) {
        document.getElementById("point11").style.display = "none";
        alert("Đáp án của bạn đã sai");
        
    }
    else  {
        // show điểm
        var x = document.getElementById("point11");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr11");
        if(y.style.display=="none"){
            y.style.display = "block";
        }   
    
    }

}
document.getElementById("loigiai11").style.display="none";
function showanswer11(){
    var loigiai11 = document.getElementById("loigiai11");
    if(loigiai11.style.display=="none"){
        loigiai11.style.display = "block";
    }
    else{
        loigiai11.style.display = "none";
    }
}
// ===========12=======================

document.getElementById("point12").style.display = "none";
document.getElementById("showansewr12").style.display = "none";
function cau12(){
    var cau12 = document.getElementById("cau12");
    dapanB = cau12.querySelector('input[id="dapanB"]:checked');

    if (!dapanB){
        document.getElementById("point12").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point12");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr12");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}

document.getElementById("loigiai12").style.display="none";
function showanswer12(){
    var loigiai12 = document.getElementById("loigiai12");
    if(loigiai12.style.display=="none"){
        loigiai12.style.display = "block";
    }
    else{
        loigiai12.style.display = "none";
    }
}
// ===========13=======================
document.getElementById("point13").style.display = "none";
document.getElementById("showansewr13").style.display = "none";
function cau13(){
    var cau13 = document.getElementById("cau13");
    dapanA = cau13.querySelector('input[id="dapanA"]:checked');

    if (!dapanA){
        document.getElementById("point13").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point13");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr13");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}
document.getElementById("loigiai13").style.display="none";
function showanswer13(){
    var loigiai13 = document.getElementById("loigiai13");
    if(loigiai13.style.display=="none"){
        loigiai13.style.display = "block";
    }
    else{
        loigiai13.style.display = "none";
    }
}
// ===========4=======================

document.getElementById("point14").style.display = "none";
document.getElementById("showansewr14").style.display = "none";
function cau14(){
    var cau14 = document.getElementById("cau14");
    dapanC = cau14.querySelector('input[id="dapanC"]:checked');

    if (!dapanC){
        document.getElementById("point14").style.display = "none";
        alert("Đáp án của bạn đã sai");
         
    }
    else  {
        // show điểm
        var x = document.getElementById("point14");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr14");
        if(y.style.display=="none"){
            y.style.display = "block";
        }

    }

}
document.getElementById("loigiai14").style.display="none";
function showanswer14(){
    var loigiai14 = document.getElementById("loigiai14");
    if(loigiai14.style.display=="none"){
        loigiai14.style.display = "block";
    }
    else{
        loigiai14.style.display = "none";
    }
}
// ===========15=======================
document.getElementById("point15").style.display = "none";
document.getElementById("showansewr15").style.display = "none";
function cau15(){
    var cau15 = document.getElementById("cau15");
    dapanA = cau15.querySelector('input[id="dapanA"]:checked');

    if (!dapanA){
        document.getElementById("point15").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point15");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr15");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}
document.getElementById("loigiai15").style.display="none";
function showanswer15(){
    var loigiai15 = document.getElementById("loigiai15");
    if(loigiai15.style.display=="none"){
        loigiai15.style.display = "block";
    }
    else{
        loigiai15.style.display = "none";
    }
}
// ===========================16
document.getElementById("point16").style.display = "none";
document.getElementById("showansewr16").style.display = "none";
function cau16(){
    var cau16 = document.getElementById("cau16");
    dapanB = cau16.querySelector('input[id="dapanB"]:checked');

    if (!dapanB){
        document.getElementById("point16").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point16");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr16");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}

document.getElementById("loigiai16").style.display="none";
function showanswer16(){
    var loigiai16 = document.getElementById("loigiai16");
    if(loigiai16.style.display=="none"){
        loigiai16.style.display = "block";
    }
    else{
        loigiai16.style.display = "none";
    }
}
// ===========================17
document.getElementById("point17").style.display = "none";
document.getElementById("showansewr17").style.display = "none";
function cau17(){
    var cau17 = document.getElementById("cau17");
    dapanC = cau17.querySelector('input[id="dapanC"]:checked');

    if (!dapanC){
        document.getElementById("point17").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  { 
        // show điểm
        var x = document.getElementById("point17");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr17");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}
document.getElementById("loigiai17").style.display="none";
function showanswer17(){
    var loigiai17 = document.getElementById("loigiai17");
    if(loigiai17.style.display=="none"){
        loigiai17.style.display = "block";
    }
    else{
        loigiai17.style.display = "none";
    }
}
// ================================18
document.getElementById("point18").style.display = "none";
document.getElementById("showansewr18").style.display = "none";
function cau18(){
    var cau18 = document.getElementById("cau18");
    dapanB = cau18.querySelector('input[id="dapanB"]:checked');

    if (!dapanB){
        document.getElementById("point18").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point18");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr18");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}
document.getElementById("loigiai18").style.display="none";
function showanswer18(){
    var loigiai18 = document.getElementById("loigiai18");
    if(loigiai18.style.display=="none"){
        loigiai18.style.display = "block";
    }
    else{
        loigiai18.style.display = "none";
    }
}
// ===============================19
document.getElementById("point19").style.display = "none";
document.getElementById("showansewr19").style.display = "none";
function cau19(){
    var cau19 = document.getElementById("cau19");
    dapanD = cau19.querySelector('input[id="dapanD"]:checked');

    if (!dapanD){
        document.getElementById("point19").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point19");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr19");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}

document.getElementById("loigiai19").style.display="none";
function showanswer19(){
    var loigiai19 = document.getElementById("loigiai19");
    if(loigiai19.style.display=="none"){
        loigiai19.style.display = "block";
    }
    else{
        loigiai19.style.display = "none";
    }
}
// ========================20
document.getElementById("point20").style.display = "none";
document.getElementById("showansewr20").style.display = "none";
function cau20(){
    var cau20 = document.getElementById("cau20");
    dapanC = cau20.querySelector('input[id="dapanC"]:checked');

    if (!dapanC){
        document.getElementById("point20").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point20");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr20");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}

document.getElementById("loigiai20").style.display="none";
function showanswer20(){
    var loigiai20 = document.getElementById("loigiai20");
    if(loigiai20.style.display=="none"){
        loigiai20.style.display = "block";
    }
    else{
        loigiai20.style.display = "none";
    }
}
// /========================================================
// 20 chức năng//

// /========================================================
// /========================================================
// /========================================================
// /========================================================


// /==============21==========================================

document.getElementById("point21").style.display = "none";
document.getElementById("showansewr21").style.display = "none";
function cau21() {
    var cau21 = document.getElementById("cau21");
    dapanA = cau21.querySelector('input[id="dapanA"]:checked');
    // var dapanB = cau1.querySelector('input[id="dapanB"]:checked');
    // var dapanC = cau1.querySelector('input[id="dapanC"]:checked');
    // var dapanD = cau1.querySelector('input[id="dapanD"]:checked');

    if (!dapanA) {
        document.getElementById("point21").style.display = "none";
        alert("Đáp án của bạn đã sai");
        
    }
    else  {
        // show điểm
        var x = document.getElementById("point21");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr21");
        if(y.style.display=="none"){
            y.style.display = "block";
        }   
    
    }

}
document.getElementById("loigiai21").style.display="none";
function showanswer21(){
    var loigiai21 = document.getElementById("loigiai21");
    if(loigiai21.style.display=="none"){
        loigiai21.style.display = "block";
    }
    else{
        loigiai21.style.display = "none";
    }
}
// ===========22=======================

document.getElementById("point22").style.display = "none";
document.getElementById("showansewr22").style.display = "none";
function cau22(){
    var cau22 = document.getElementById("cau22");
    dapanB = cau22.querySelector('input[id="dapanB"]:checked');

    if (!dapanB){
        document.getElementById("point22").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point22");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr22");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}

document.getElementById("loigiai22").style.display="none";
function showanswer22(){
    var loigiai22 = document.getElementById("loigiai22");
    if(loigiai22.style.display=="none"){
        loigiai22.style.display = "block";
    }
    else{
        loigiai22.style.display = "none";
    }
}
// ===========23=======================
document.getElementById("point23").style.display = "none";
document.getElementById("showansewr23").style.display = "none";
function cau23(){
    var cau23 = document.getElementById("cau23");
    dapanB = cau23.querySelector('input[id="dapanB"]:checked');

    if (!dapanB){
        document.getElementById("point23").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point23");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr23");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}
document.getElementById("loigiai23").style.display="none";
function showanswer23(){
    var loigiai23 = document.getElementById("loigiai23");
    if(loigiai23.style.display=="none"){
        loigiai23.style.display = "block";
    }
    else{
        loigiai23.style.display = "none";
    }
}
// ===========4=======================

document.getElementById("point24").style.display = "none";
document.getElementById("showansewr24").style.display = "none";
function cau24(){
    var cau24 = document.getElementById("cau24");
    dapanA = cau24.querySelector('input[id="dapanA"]:checked');

    if (!dapanA){
        document.getElementById("point24").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point24");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr24");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}
document.getElementById("loigiai24").style.display="none";
function showanswer24(){
    var loigiai24 = document.getElementById("loigiai24");
    if(loigiai24.style.display=="none"){
        loigiai24.style.display = "block";
    }
    else{
        loigiai24.style.display = "none";
    }
}
// ===========25=======================
document.getElementById("point25").style.display = "none";
document.getElementById("showansewr25").style.display = "none";
function cau25(){
    var cau25 = document.getElementById("cau25");
    dapanC = cau25.querySelector('input[id="dapanC"]:checked');

    if (!dapanC){
        document.getElementById("point25").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point25");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr25");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}
document.getElementById("loigiai25").style.display="none";
function showanswer25(){
    var loigiai25 = document.getElementById("loigiai25");
    if(loigiai25.style.display=="none"){
        loigiai25.style.display = "block";
    }
    else{
        loigiai25.style.display = "none";
    }
}
// ===========================26
document.getElementById("point26").style.display = "none";
document.getElementById("showansewr26").style.display = "none";
function cau26(){
    var cau26 = document.getElementById("cau26");
    dapanA = cau26.querySelector('input[id="dapanA"]:checked');

    if (!dapanA){
        document.getElementById("point26").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point26");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr26");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}

document.getElementById("loigiai26").style.display="none";
function showanswer26(){
    var loigiai26 = document.getElementById("loigiai26");
    if(loigiai26.style.display=="none"){
        loigiai26.style.display = "block";
    }
    else{
        loigiai26.style.display = "none";
    }
}
// ===========================27
document.getElementById("point27").style.display = "none";
document.getElementById("showansewr27").style.display = "none";
function cau27(){
    var cau27 = document.getElementById("cau27");
    dapanD = cau27.querySelector('input[id="dapanD"]:checked');

    if (!dapanD){
        document.getElementById("point27").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point27");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr27");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}
document.getElementById("loigiai27").style.display="none";
function showanswer27(){
    var loigiai27 = document.getElementById("loigiai27");
    if(loigiai27.style.display=="none"){
        loigiai27.style.display = "block";
    }
    else{
        loigiai27.style.display = "none";
    }
}
// ================================28
document.getElementById("point28").style.display = "none";
document.getElementById("showansewr28").style.display = "none";
function cau28(){
    var cau28 = document.getElementById("cau28");
    dapanC = cau28.querySelector('input[id="dapanC"]:checked');

    if (!dapanC){
        document.getElementById("point28").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point28");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr28");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}
document.getElementById("loigiai28").style.display="none";
function showanswer28(){
    var loigiai28 = document.getElementById("loigiai28");
    if(loigiai28.style.display=="none"){
        loigiai28.style.display = "block";
    }
    else{
        loigiai28.style.display = "none";
    }
}
// ===============================29
document.getElementById("point29").style.display = "none";
document.getElementById("showansewr29").style.display = "none";
function cau29(){
    var cau29 = document.getElementById("cau29");
    dapanA = cau29.querySelector('input[id="dapanA"]:checked');

    if (!dapanA){
        document.getElementById("point29").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point29");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr29");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}

document.getElementById("loigiai29").style.display="none";
function showanswer29(){
    var loigiai29 = document.getElementById("loigiai29");
    if(loigiai29.style.display=="none"){
        loigiai29.style.display = "block";
    }
    else{
        loigiai29.style.display = "none";
    }
}
// ========================30
document.getElementById("point30").style.display = "none";
document.getElementById("showansewr30").style.display = "none";
function cau30(){
    var cau30 = document.getElementById("cau30");
    dapanB = cau30.querySelector('input[id="dapanB"]:checked');

    if (!dapanB){
        document.getElementById("point30").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point30");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr30");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}

document.getElementById("loigiai30").style.display="none";
function showanswer30(){
    var loigiai30 = document.getElementById("loigiai30");
    if(loigiai30.style.display=="none"){
        loigiai30.style.display = "block";
    }
    else{
        loigiai30.style.display = "none";
    }
}
// /========================================================
// 30 chức năng//

// /========================================================
// /========================================================
// /========================================================
// /========================================================


// /==============31==========================================

document.getElementById("point31").style.display = "none";
document.getElementById("showansewr31").style.display = "none";
function cau31() {
    var cau31 = document.getElementById("cau31");
    dapanC = cau31.querySelector('input[id="dapanC"]:checked');
    // var dapanB = cau1.querySelector('input[id="dapanB"]:checked');
    // var dapanC = cau1.querySelector('input[id="dapanC"]:checked');
    // var dapanD = cau1.querySelector('input[id="dapanD"]:checked');

    if (!dapanC) {
        document.getElementById("point31").style.display = "none";
        alert("Đáp án của bạn đã sai");
        
    }
    else  {
        // show điểm
        var x = document.getElementById("point31");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr31");
        if(y.style.display=="none"){
            y.style.display = "block";
        }   
    
    }

}
document.getElementById("loigiai31").style.display="none";
function showanswer31(){
    var loigiai31 = document.getElementById("loigiai31");
    if(loigiai31.style.display=="none"){
        loigiai31.style.display = "block";
    }
    else{
        loigiai31.style.display = "none";
    }
}
// ===========32=======================

document.getElementById("point32").style.display = "none";
document.getElementById("showansewr32").style.display = "none";
function cau32(){
    var cau32 = document.getElementById("cau32");
    dapanD = cau32.querySelector('input[id="dapanD"]:checked');

    if (!dapanD){
        document.getElementById("point32").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point32");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr32");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}

document.getElementById("loigiai32").style.display="none";
function showanswer32(){
    var loigiai32 = document.getElementById("loigiai32");
    if(loigiai32.style.display=="none"){
        loigiai32.style.display = "block";
    }
    else{
        loigiai32.style.display = "none";
    }
}
// ===========33=======================
document.getElementById("point33").style.display = "none";
document.getElementById("showansewr33").style.display = "none";
function cau33(){
    var cau33 = document.getElementById("cau33");
    dapanA = cau33.querySelector('input[id="dapanA"]:checked');

    if (!dapanA){
        document.getElementById("point33").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point33");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr33");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}
document.getElementById("loigiai33").style.display="none";
function showanswer33(){
    var loigiai33 = document.getElementById("loigiai33");
    if(loigiai33.style.display=="none"){
        loigiai33.style.display = "block";
    }
    else{
        loigiai33.style.display = "none";
    }
}
// ===========4=======================

document.getElementById("point34").style.display = "none";
document.getElementById("showansewr34").style.display = "none";
function cau34(){
    var cau34 = document.getElementById("cau34");
    dapanC = cau34.querySelector('input[id="dapanC"]:checked');

    if (!dapanC){
        document.getElementById("point34").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point34");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr34");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}
document.getElementById("loigiai34").style.display="none";
function showanswer34(){
    var loigiai34 = document.getElementById("loigiai34");
    if(loigiai34.style.display=="none"){
        loigiai34.style.display = "block";
    }
    else{
        loigiai34.style.display = "none";
    }
}
// ===========35=======================
document.getElementById("point35").style.display = "none";
document.getElementById("showansewr35").style.display = "none";
function cau35(){
    // var cau35 = document.getElementById("cau35");
    var dapanA35 = document.getElementById("dapanA35").value;
    // dapanA = cau35.querySelector('input[id="dapanA"]:checked');

    if ( dapanA35 == "occasionally" ){
        // show điểm
        var x = document.getElementById("point35");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr35");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }
    else  {
        document.getElementById("point35").style.display = "none";
        alert("Đáp án của bạn đã sai");
        
    }

}
document.getElementById("loigiai35").style.display="none";
function showanswer35(){
    var loigiai35 = document.getElementById("loigiai35");
    if(loigiai35.style.display=="none"){
        loigiai35.style.display = "block";
    }
    else{
        loigiai35.style.display = "none";
    }
}
// ===========================36
document.getElementById("point36").style.display = "none";
document.getElementById("showansewr36").style.display = "none";
function cau36(){
    var dapanA36 = document.getElementById("dapanA36").value;

    if (dapanA36 == "impressive"){
        // show điểm
        var x = document.getElementById("point36");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr36");
        if(y.style.display=="none"){
            y.style.display = "block";
        }
        }
    else  {
        document.getElementById("point36").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }

}

document.getElementById("loigiai36").style.display="none";
function showanswer36(){
    var loigiai36 = document.getElementById("loigiai36");
    if(loigiai36.style.display=="none"){
        loigiai36.style.display = "block";
    }
    else{
        loigiai36.style.display = "none";
    }
}
// ===========================37
document.getElementById("point37").style.display = "none";
document.getElementById("showansewr37").style.display = "none";
function cau37(){
    var cau37 = "Modern patterns have been added to the Ao dai to make it more fashionable.";
    var dapanA37 = document.getElementById("dapanA37").value;

    if (dapanA37 == cau37){
        // show điểm
        var x = document.getElementById("point37");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr37");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
        }
    else  {
        document.getElementById("point37").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }

}
document.getElementById("loigiai37").style.display="none";
function showanswer37(){
    var loigiai37 = document.getElementById("loigiai37");
    if(loigiai37.style.display=="none"){
        loigiai37.style.display = "block";
    }
    else{
        loigiai37.style.display = "none";
    }
}
// ================================38
document.getElementById("point38").style.display = "none";
document.getElementById("showansewr38").style.display = "none";
function cau38(){
    var cau38 = "Nowadays, learning a foreign language is compulsory for students of all ages.";
    var dapanA38 = document.getElementById("dapanA38").value;

    if (dapanA38 == cau38){
        // show điểm
        var x = document.getElementById("point38");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr38");
        if(y.style.display=="none"){
            y.style.display = "block";
        }
    }
    else  {
        document.getElementById("point38").style.display = "none";
        alert("Đáp án của bạn đã sai");
        
        }

}
document.getElementById("loigiai38").style.display="none";
function showanswer38(){
    var loigiai38 = document.getElementById("loigiai38");
    if(loigiai38.style.display=="none"){
        loigiai38.style.display = "block";
    }
    else{
        loigiai38.style.display = "none";
    }
}
// ===============================39
document.getElementById("point39").style.display = "none";
document.getElementById("showansewr39").style.display = "none";
function cau39(){
    var cau39 = "Linh should clear up the garbage before leaving.";
    var dapanA39 = document.getElementById("dapanA39").value;


    if (dapanA39 == cau39){
        // show điểm
        var x = document.getElementById("point39");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr39");
        if(y.style.display=="none"){
            y.style.display = "block";
        }
        
    }
    else  {
        document.getElementById("point39").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }

}

document.getElementById("loigiai39").style.display="none";
function showanswer39(){
    var loigiai39 = document.getElementById("loigiai39");
    if(loigiai39.style.display=="none"){
        loigiai39.style.display = "block";
    }
    else{
        loigiai39.style.display = "none";
    }
}
// ========================40
document.getElementById("point40").style.display = "none";
document.getElementById("showansewr40").style.display = "none";
function cau40(){
    var cau40 = "A long time since we last used these machines.";
    var dapanA40 = document.getElementById("dapanA40").value;

    if (dapanA40 == cau40){
        // show điểm
        var x = document.getElementById("point40");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr40");
        if(y.style.display=="none"){
            y.style.display = "block";
        }
    }
    else  {
        document.getElementById("point40").style.display = "none";
        alert("Đáp án của bạn đã sai");
         
    }

}

document.getElementById("loigiai40").style.display="none";
function showanswer40(){
    var loigiai40 = document.getElementById("loigiai40");
    if(loigiai40.style.display=="none"){
        loigiai40.style.display = "block";
    }
    else{
        loigiai40.style.display = "none";
    }
}
// /========================================================
// /========================================================
// 40 chức năng//
// /========================================================
// /========================================================
// /========================================================




// /==============41==========================================

document.getElementById("point41").style.display = "none";
document.getElementById("showansewr41").style.display = "none";
function cau41() {
    var cau41 = "play tennis better than Thu.";
    var dapanA41 = document.getElementById("dapanA41").value;
    // var dapanB = cau1.querySelector('input[id="dapanB"]:checked');
    // var dapanC = cau1.querySelector('input[id="dapanC"]:checked');
    // var dapanD = cau1.querySelector('input[id="dapanD"]:checked');

    if (dapanA41 == cau41) {
        // show điểm
        var x = document.getElementById("point41");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr41");
        if(y.style.display=="none"){
            y.style.display = "block";
        }
    }
    else  {
        document.getElementById("point41").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }

}
document.getElementById("loigiai41").style.display="none";
function showanswer41(){
    var loigiai41 = document.getElementById("loigiai41");
    if(loigiai41.style.display=="none"){
        loigiai41.style.display = "block";
    }
    else{
        loigiai41.style.display = "none";
    }
}
// ===========42=======================

document.getElementById("point42").style.display = "none";
document.getElementById("showansewr42").style.display = "none";
function cau42(){
    var cau42 = "were not travelling on uncomfortable buses.";
    var dapanA42 = document.getElementById("dapanA42").value;

    if (dapanA42 == cau42){
        // show điểm
        var x = document.getElementById("point42");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr42");
        if(y.style.display=="none"){
            y.style.display = "block";
        }
    }
    else  {
        document.getElementById("point42").style.display = "none";
        alert("Đáp án của bạn đã sai");
         
    }

}

document.getElementById("loigiai42").style.display="none";
function showanswer42(){
    var loigiai42 = document.getElementById("loigiai42");
    if(loigiai42.style.display=="none"){
        loigiai42.style.display = "block";
    }
    else{
        loigiai42.style.display = "none";
    }
}
// ===========43=======================
document.getElementById("point43").style.display = "none";
document.getElementById("showansewr43").style.display = "none";
function cau43(){
    var cau43 = "F";
    var dapanA43 = document.getElementById("dapanA43").value;

    if (dapanA43 == cau43){
        // show điểm
        var x = document.getElementById("point43");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr43");
        if(y.style.display=="none"){
            y.style.display = "block";
        }
        
    }
    else  {
        document.getElementById("point43").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }

}
document.getElementById("loigiai43").style.display="none";
function showanswer43(){
    var loigiai43 = document.getElementById("loigiai43");
    if(loigiai43.style.display=="none"){
        loigiai43.style.display = "block";
    }
    else{
        loigiai43.style.display = "none";
    }
}
// ===========44=======================

document.getElementById("point44").style.display = "none";
document.getElementById("showansewr44").style.display = "none";
function cau44(){
    var cau44 = "F";
    var dapanA44 = document.getElementById("dapanA44").value;

    if (dapanA44 == cau44){
        // show điểm
        var x = document.getElementById("point44");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr44");
        if(y.style.display=="none"){
            y.style.display = "block";
        }
        
    }
    else  {
        document.getElementById("point44").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }

}
document.getElementById("loigiai44").style.display="none";
function showanswer44(){
    var loigiai44 = document.getElementById("loigiai44");
    if(loigiai44.style.display=="none"){
        loigiai44.style.display = "block";
    }
    else{
        loigiai44.style.display = "none";
    }
}
// ===========45=======================
document.getElementById("point45").style.display = "none";
document.getElementById("showansewr45").style.display = "none";
function cau45(){
    var cau45 = "T";
    var dapanA45 = document.getElementById("dapanA45").value;

    if (dapanA45 == cau45){
        // show điểm
        var x = document.getElementById("point45");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr45");
        if(y.style.display=="none"){
            y.style.display = "block";
        }
    }
    else  {
        document.getElementById("point45").style.display = "none";
        alert("Đáp án của bạn đã sai");
         
    }

}
document.getElementById("loigiai45").style.display="none";
function showanswer45(){
    var loigiai45 = document.getElementById("loigiai45");
    if(loigiai45.style.display=="none"){
        loigiai45.style.display = "block";
    }
    else{
        loigiai45.style.display = "none";
    }
}
// ===========================46
document.getElementById("point46").style.display = "none";
document.getElementById("showansewr46").style.display = "none";
function cau46(){
    var cau46 = "T";
    var dapanA46 = document.getElementById("dapanA46").value;

    if (dapanA46 == cau46){
        // show điểm
        var x = document.getElementById("point46");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr46");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
        
    }
    else  {
        document.getElementById("point46").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }

}

document.getElementById("loigiai46").style.display="none";
function showanswer46(){
    var loigiai46 = document.getElementById("loigiai46");
    if(loigiai46.style.display=="none"){
        loigiai46.style.display = "block";
    }
    else{
        loigiai46.style.display = "none";
    }
}
// ===========================47
document.getElementById("point47").style.display = "none";
document.getElementById("showansewr47").style.display = "none";
function cau47(){
    var cau47 = document.getElementById("cau47");
    dapanC = cau47.querySelector('input[id="dapanC"]:checked');

    if (!dapanC){
        document.getElementById("point47").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point47");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr47");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}
document.getElementById("loigiai47").style.display="none";
function showanswer47(){
    var loigiai47 = document.getElementById("loigiai47");
    if(loigiai47.style.display=="none"){
        loigiai47.style.display = "block";
    }
    else{
        loigiai47.style.display = "none";
    }
}
// ================================48
document.getElementById("point48").style.display = "none";
document.getElementById("showansewr48").style.display = "none";
function cau48(){
    var cau48 = document.getElementById("cau48");
    dapanD = cau48.querySelector('input[id="dapanD"]:checked');

    if (!dapanD){
        document.getElementById("point48").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point48");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr48");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}
document.getElementById("loigiai48").style.display="none";
function showanswer48(){
    var loigiai48 = document.getElementById("loigiai48");
    if(loigiai48.style.display=="none"){
        loigiai48.style.display = "block";
    }
    else{
        loigiai48.style.display = "none";
    }
}
// ===============================49
document.getElementById("point49").style.display = "none";
document.getElementById("showansewr49").style.display = "none";
function cau49(){
    var cau49 = document.getElementById("cau49");
    dapanD = cau49.querySelector('input[id="dapanD"]:checked');

    if (!dapanD){
        document.getElementById("point49").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point49");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr49");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}

document.getElementById("loigiai49").style.display="none";
function showanswer49(){
    var loigiai49 = document.getElementById("loigiai49");
    if(loigiai49.style.display=="none"){
        loigiai49.style.display = "block";
    }
    else{
        loigiai49.style.display = "none";
    }
}
// ========================50
document.getElementById("point50").style.display = "none";
document.getElementById("showansewr50").style.display = "none";
function cau50(){
    var cau50 = document.getElementById("cau50");
    dapanB = cau50.querySelector('input[id="dapanB"]:checked');

    if (!dapanB){
        document.getElementById("point50").style.display = "none";
        alert("Đáp án của bạn đã sai");
    }
    else  {
        // show điểm
        var x = document.getElementById("point50");
        if(x.style.display=="none"){
            x.style.display = "block";
        }
        // showw lời giải
        var y = document.getElementById("showansewr50");
        if(y.style.display=="none"){
            y.style.display = "block";
        } 
    }

}

document.getElementById("loigiai50").style.display="none";
function showanswer50(){
    var loigiai50 = document.getElementById("loigiai50");
    if(loigiai50.style.display=="none"){
        loigiai50.style.display = "block";
    }
    else{
        loigiai50.style.display = "none";
    }
}
// /========================================================

// 50 chức nắng //







// /========================================================








// /========================================================
// /========================================================
// /========================================================
// /========================================================
// /========================================================
// /========================================================
// /========================================================
// /========================================================
// /========================================================
// /========================================================
// /========================================================
// /========================================================





