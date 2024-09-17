
function displayName()
{
    console.log("my name is nazeer")
}
console.log("welcome")
displayName();

//finction can take parameters
function display(n)
{
    console.log("my name is "+n)
}
display(1234);
// WAF to take two number and print its sum
function sum(a,b)
{
    console.log("sum of "+(a+b))
}
sum(false,true); //false=0,true=1

function add(a,b)
{
    console.log(a,b)
}
add(10,20,30);

//what if we want take all parameters
//always rest operator should be last
//spread operator is denoted by ...(three dots)
function my(a,...b)//... is a rest operator
{
    console.log(a,b)//1 [2,3,6,9,5]
}
my(1,2,3,6,9,5)

function myFun(a,...b)
{
    const arr=[10,20,b,40];
    console.log(a,b,arr)//a=2,b=[4,6,7,'nndf',true],arr=[10,20,[4,6,7,'nndf,true],40]

}
myFun(2,4,6,7,'nndf',true);

function fun(x,y,...z)
{
    console.log(x,y,z);
    let n=[...z,4];
    console.log(n);
}
fun(2,4,6,7,8,1);

//function can return 
function cal(p,q)
{
    return p*q;
}
let x=cal(10,20);
console.log(x);

function displayName ()
{
    console.log("My name is Prasad")
}
console.log("hello world")
displayName();

// function can take parameters
function display (n)
{
    console.log(`My name is ${n}`)
}
display(12345)
// wAF to take two numbers and print its sum

function sum(a, b) {
	console.log(`Sum is ${a + b}`)
}
sum(true, 2)

function add (a, b)
{
    console.log(a+b)
}
add(5)
// what if we want take all paraeters
//rest operator is used to take multiple values as a array. it is denoted by ...
//Always rest operator should be last
// spread operator is denoted by ...(three dots)
function myFun (a,...b)
{
    const arr=[12,13,...b,14]
    console.log(a,b,arr)
}
myFun(8,6,7,8,5,5,"jhhdf",true)


function fruits (a, ...b) //rest
{
    console.log(a, b);
    let newArr = [...b, "pineapple"] //spread
    console.log(newArr)
}
fruits("apple","mango","orange","banana")




function fun2 (x, y, ...z) // rest is used to take rest of values from arguments 1,2,3 and pack them as array - [1,2,3]
{
    console.log(x, y, z);
    let p = [...z, 4]
    console.log(p)//spread operator is used to spread out values inside z [1,2,3,4]
}
fun2(5, 6, 1, 2, 3);

// function can return
function calc (p, q)
{
    return p+q
}
let s=calc(5,6)
console.log(s)


// function expressions: functions can be expresses or interpreted as variabled by JS engine
function fun3 (a, b)
{
    console.log(a-b)
}
var fun3 = function (a,b) // function expression
{
    console.log(a + b)
}
let p = 25;
console.log(fun3,p)

// write a function mul which takes two values and print their multiplication. also convert that function into function expression
function mul (a, b)
{
    return a*b
}
mul(5, 6);
var mul = function (a, b)
{
    return a * b;
}
mul(5, 6);
// currying
var mul = function (s)
{
    return function (y)
    {
        return s*y
    }
}
let x1 = mul(5)
let y1= x1(6)


//Arrow functions
let fun4=function (a, b)
{
    return a + b;
}
let res=fun4(2,3)
console.log(res)

let fun5=(a,b)=>a*b
let res2 = fun5(2, 3)
console.log(res2)
// write a function which takes a and b and return sum of its squares, use normal function expression and also convert them into arrow 
let sumOfSquares = function (a, b) { return a * a + b * b; }
let sumOfSquares2 = (a, b) => a * a + b * b;
// what is the difference between arrow and normal? arrow is modern way of
// writing function expression and it is simple. Also if only one statement is there , arrow function will return by default


//-- function can be nested . one function inside another function isacalled nested functions, If nested function can remember outer function values after outer execution ended is known as closures

function outer ()
{
    let c = 0;
    function inner ()
    {
        c++;
        console.log(c)
    }
    return inner;
}
let z = outer();
console.log(z) // complete inner function
z()
z()

//callback functions
function mad ()
{
    console.log("I'm mad")
}
function bad ()
{
    console.log("i'm bad")
}
function dad (a, b)
{
    a();
    b();
}
dad(mad, bad)
// mad and bad are callback functions because they are passed
// to another function as a parameter
// function which takes other functions as parameter is called
//Higher Order function dad is higher order




function x2(){
    console.log("good")
  }
  function y(a,b){
    b();
    console.log(a);
  }
  y("boy",x2);



  const fun6= () =>
  {
    console.log("i am fun6");
  }
  function f6(a,b)
  {
    b();
    console.log(a);
  }
  f6(5,fun6)

  // a function can be called without name-->anonymous function 
  //a function can be called itself only ones -->IIFE -IMMEDIATE INVOKE FUNCTION EXPRESSION

  (function()
  {
      console.log("hiiiiii");//encapsulation
  })();

 




























