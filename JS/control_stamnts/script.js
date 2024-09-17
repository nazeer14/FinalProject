// if block 

//1)simple if
let a=20;
let b=5;
if(a>b)
{
    console.log("a is bigger then b")
}

//2)if else
//write a function to check even or odd
function evenodd(val){
    if(val%2==0){
        console.log(val+" is Even")
    }
    else
    console.log(val+" is odd")
}
evenodd(1);

//vote elgibility
function vote(age){
    if(age>=18 && age<=120){
        console.log("elgible")
    }
    else 
    console.log("Not elgible")
}
vote(150);

// check given number is positive or negative
function find(s){
    if(s>0)
        console.log(s+" is Positive");
    else if(s<0)
        console.log(s+" is Negative");
    else     
        console.log("Zero")
}
find(0);

//switch is used to control the flow of the statement
function user(role){
    switch(role){
        case "manager":
            console.log("I am manager");break;
        case "admin":
            console.log("I am admin");break;
        case "client":
            console.log("I am client");break;
        default:
            console.log("Enter correct role")
    }
}
user("admin");





//Loops--->loops are used to iterate certain statements
// eveery loops will have three statements -- initalization ,condition ,updation
//basically there are two types of loops--entry control,exit control
//entry control loop checks the condition at the starting of the loop :while,for
//exit control loop check the condtion at the end of loop eg: do while

//While
let l1=0;
while(l1<=10){
    console.log(l1);
    l1++;
}

//do while
let l2=20;
do{
    console.log(l2)
    l2++;
}
while(l2<23)

//for loop
let l3=[3,4,5,6,9];
for(let i=0;i<l3.length;i++) {
    console.log(l3[i]);
}   


//for... of  ==>used to iterate array values
let l4=[10,20,30]
for(let i of l4){
    console.log(i)
}

//for... in ===>used to iterate array indexes..usually we use in key
for(let i in l4){
    console.log(i)
}














