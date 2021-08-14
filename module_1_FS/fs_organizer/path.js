let path=require("path");
let fs=require("fs");
console.log(process.cwd());


let inputArr=process.argv.slice(2,5);
let inputArr2=process.argv.slice(5);
for(let i=0;i<inputArr.length;i++){
    let filename=inputArr[i];
    let currentPath=process.cwd();
    let folderPath=path.join(currentPath,"webDev",filename);
    fs.mkdirSync(folderPath);

    for(let i=0;i<inputArr2.length;i++){
        let filename=inputArr2[i];
        let folderPath2=path.join(folderPath,filename);
        fs.mkdirSync(folderPath2);
        let filePath=path.join(folderPath2,"read.txt");
        fs.writeFileSync(filePath,"Omansh");
    }
}
    

// }
// let inputArr2=process.argv.slice(5);
// for(let i=0;i<inputArr2.length;i++){
//     let filename=inputArr2[i];
//     let currentPath=process.cwd();
//     let folderPath=path.join(currentPath,"webDev","BROWSER",filename);
//     fs.mkdirSync(folderPath);
//     let filePath=path.join(folderPath,"read.txt");
//     fs.writeFileSync(filePath,"Omansh");
// }

