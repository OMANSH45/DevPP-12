// let a=10;
// function fn(){
//     let a=20;
//     a++;
//     console.log(a);
//     if(true){
//         a=30;
//         a++;
//         console.log(a);
//     }
//     console.log(a);
// }
// console.log(a);
// fn();
// console.log(a);
var varName=1;

function b(){
    let varName=2;
    function a(){
        varName++;
        console.log(varName);
    }
    a();
    console.log(varName);
}
b();