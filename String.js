//Strings

//concatenate
let a=10;
let str="Omansh "+a;
console.log(str);

//template string is enclosed in backtick
str=`Omansh
is great`;
console.log(str);
str=`Omansh ${a}`;
console.log(str);

//character at an idx
let ch =str.charAt(4);
console.log(ch);

//Slice->similar to subString
let slicesString = str.slice(4,10);
console.log(slicesString);

//other functions-> toLowerCase(),toUpperCase(),str.length

//split->converts string to array of string
let ArrayStr=str.split("a");
console.log("Array of String ",ArrayStr);

//trim->remove the white spaces after and before the String
let str1 = "   Omansh Dhawan  ";
let trimmedstr=str1.trim();
console.log(trimmedstr);

//split->on basis of String
let arrString = trimmedstr.split(" ");
console.log("arr string", arrString);

//join->converts array of String to String
let ans = arrString.join("+");
console.log(ans);

