//function
let arr=[];
 function fn(){
    console.log("Omansh is great");
    return null;
}
console.log(typeof arr);
console.log(Array.isArray(arr));
console.log(typeof fn);

//Advance Array
//array is a collection of homogeneous type -> java/c++
//array is a collection of anything -> javascript 
let arr0=[1,true,1.1,"String",null,[1,2,3,4,5]];
console.log(arr0[arr0.length-1][2]);

let arr1=[1,true,1.1,"String",null,[1,2,3,4,5],
function fn(){
    console.log("Omansh");
    return 10;
}];
//function invocation
let rVal=arr1[arr1.length-1]();
console.log(rVal);

function fn(){
    fn1();
    console.log("fn");
    return "hello";
}
function fn1(){
    console.log("fn1"); 
}
console.log("rVal",fn());
