const countValue=document.getElementById('count')
console.log(countValue.textContent)
let n=0;
let temp=0;
function enter1(){
    n=1;
    countValue.textContent=n;
}
function enter2(){
    n=2;
    countValue.textContent=n;
}
function enter3(){
    n=3;
    countValue.textContent=n;
}
function enter4(){
    n=4;
    countValue.textContent=n;
}
function enter5(){
    n=5;
    countValue.textContent=n;
}
function enter6(){
    n=6;
    countValue.textContent=n;
    temp=n;
}
function enter7(){
    n=7;
    countValue.textContent=n;
}
function enter8(){
    n=8;
    countValue.textContent=n;
}
function enter9(){
    n=9;
    countValue.textContent=n;
}
function enter0(){
    n=0;
    countValue.textContent=n;
}
function inc(){
    n='+';
    countValue.textContent=n;
}
function ans(){
    countValue.textContent=temp;
}
