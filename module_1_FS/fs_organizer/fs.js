//FILE SYSTEM

//implementation -> files/folder interact
let fs=require("fs");

//read
let content=fs.readFileSync("f1.txt");
console.log("content : "+content);
//data in hex form
console.log("content : ",content);

//write -> write file sync
//file doesn't exist -> file create , content put
//file does exist -> content override
fs.writeFileSync("abc.txt","Omansh");

//update
fs.appendFileSync("abc.txt"," Dhawan");

//delete
 fs.unlinkSync("abc.txt");
 console.log("file removed");
