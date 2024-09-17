const para1 = document.getElementById('para1')
const para2=document.getElementById('para2')
function changeText(){
    para1.textContent="Good Bye";
}
function changeElement(){
    para2.innerHTML='<img src="./images (1).jpg" alt="eagle" height="100"/>'
}
const inputElement=document.getElementById('inp')
function checkvalue(){
    if(inputElement.value.length<6){
        alter("please enter six characters");
        inputElement.value=""
    }
}