//Arrays are used to store some items /data using indexes

let arr=[2,"hii",'n',true];
console.log(arr)

//indexes are like addres ,starts from zero
console.log(arr[1])
console.log(arr.length)//length of the array

//array methods
let arr1=[4,5,6,7,8];
arr1.push(2,3);
console.log(arr1) //adds the elements at end of the array
arr1.pop();//pop is used to remove last element of array
console.log(arr1)
arr1.unshift(1,2);//unshift adds the elements at starting of the array
console.log(arr1);
arr1.shift();
console.log(arr1) // shift is used to remove first element of the array

arr1.splice(4,2);
console.log(arr1)

arr1.splice(3,0,"abc","xys","pdd");
console.log(arr1)
/* Splice (Starting Index,delete count,adding elements)*/

/* Let arr=["john","nazeer","ross","casey","akhshya","kodad","stuward"]
1.delete stuward and add chandler
2.delete john and add joey
3.delete casey and add rachel*/

let arr2=["john","nazeer","ross","casey","akhshya","kodad","stuward"]
arr2.pop();
arr2.push("chandler");
arr2.shift()
arr2.unshift("joey")
arr2.splice(3,1,"rachel")
console.log(arr2);

let arr3=[1,2,3,4,5,6];
console.log(arr3.indexOf(4))
console.log(arr3.lastIndexOf(5))
console.log(arr3.concat("shaik"," nazeer"))

//ForEach
let std=["raj","prasad","soni","priya"]
std.forEach(function(val,ind)
{
    console.log(val+ " "+ ind)
})
/*forEach will take one call back function and it will run that callback function for each and every
element of the array .by default array item will be first parameter */

//take array [5,6,7,8] and print each elementsquare  with indexes.
let arr4=[5,6,7,8]
arr4.forEach(function(x,y)
{
    console.log((x*x)+" " +y)
})

//forEach cannot return values
let result=arr4.forEach(function (x){
    return x*x;
})
console.log(result)
let result2=arr4.map(function (x){
    return x*x;
})
console.log(result2)

let arr5=["prasad","jessi","priya"]
//let a=[].map(function (x) =>charAt(0).toUpperCase())
console.log(a)

let arr6=[1,2,3]
let x3=arr.map((a,b)=>{return a*a})
console.log(x3)



