var a=5;
console.log(a)

let a1=25 ,b1=25;
console.log(a1==b1)

let arr1=[5,6] ,brr1=[5,6];
console.log(arr1==brr1)//false

let str11="nazeer";
str11.toUpperCase()
console.log(str11)

//Operators
//1)Arithematic operators
console.log(2+3,2-3,2*3,3/2,3%2,3**2)

//2)Relational operators
console.log(2>3,3<4,2==2,2=='2',2==='2',3!=3,3!=='3',2>=1,2<=4)

//3) Assignment operators
let x=25;
x+=1;//x=x+1
console.log(x)
x-=1;//x=x-1
console.log(x)
x*=2;//x=x*2
console.log(x)
x/=2;//x=x/2
console.log(x)
x%=2;//x=x%2
console.log(x)
x**=3;//x=x power 3
console.log(x)


//3)Logical operators -->&&,||,!

console.log((2>1)&&(3<4))//true
console.log((2<3)||(3>4))//true
console.log(!(5>4))//false

//4)Conditional operator or ternary operator(?)
let z=(5>6)?5:6;
console.log(z)//6

//5) Increment and Decrement operator
let n=25;
n++;//post inc
++n;//pre inc
n--;//post dec
--n;//pre dec
console.log(n)

let n1=20;
let m=++n1 + n1++;
console.log(m)
let m1=--n1 + n1--;
console.log(m1)

// + is also osed for unary opeartor of  converting any data type into number
console.log(5+'6') //'56'
console.log(5+ +'6') //5+6=11

//mullish coelision operator
let a3=undefined;
let b3=98;
let c3=a3 ?? b3;
console.log(c3)//98 //?? is used to take a choice of two values, if first is undefined and it takes another 
