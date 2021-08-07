//Arrays
let arr=[1,2,3,4,5];
console.log(arr);
for(let i=0;i<arr.length;i++){
    console.log(i ," : ", arr[i]);
}


//push/pop -> add/remove at last
arr.push(18);
console.log(arr);
arr.pop();
console.log(arr);

//unshift/shift -> add/remove at first
arr.unshift(18);
console.log(arr);
arr.shift();
console.log(arr);


let arr1=[1,3,4,5,6];
//Slice
let sArr=arr1.slice(1,3);
console.log(sArr);

//Splice
let removedEle=arr1.splice(2,2);
console.log(removedEle);
console.log(arr1);

//indexof
let idx = arr1.indexOf(3);
console.log(idx);

//includes->return true/false if an element is present in the array or not
console.log(arr1.includes(3));

//isArray->checks the passed value is array or not
console.log(Array.isArray(arr1));