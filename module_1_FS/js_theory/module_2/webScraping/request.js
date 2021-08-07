//npm i request
let request=require("request");
//npm i cheerio
let cheerio=require("cheerio");
//data extract->cheerio
console.log("before");
request("https://www.npmjs.com/package/cheerio",cb);
function cb(error,response,html){
    if(error){
        console.log(error);

    }else if(response.statusCode==404){
        console.log("Page Not Found");

    }else{
        dataExtracter(html);

    }
}
function dataExtracter(html){
    //search Tool
    let searchTool = cheerio.load(html);
    
    //css selector->elem
    let elemRep = searchTool("#readme>h1");
    //text
    let moduleName = elemRep.text().trim();
    console.log("moduleName",moduleName);

}
console.log("after");