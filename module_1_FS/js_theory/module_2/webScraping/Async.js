// let fs=require("fs");
// console.log("before");
// fs.readFile("C:\\Users\\omansh\\Desktop\\DevPP_12\\module_1_FS\\js_theory\\module_2\\webScraping\\f.txt",cb);
// function cb(err,data){
//     if(err){
//         console.log(err);
//         console.log("content : "+data);
//     }else{
//         console.log("content : "+data);
//     }
    
// }
// console.log("after");

let fs=require("fs");
console.log("before");
fs.readFile("f1.txt",cb1);
function cb1(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data+"");
    }
}
fs.readFile("f2.txt",cb2);
function cb2(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data+"");
    }
}
console.log("after");
