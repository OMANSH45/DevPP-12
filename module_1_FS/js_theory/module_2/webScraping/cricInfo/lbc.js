let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary";

//npm i request
let request=require("request");
//npm i cheerio
let cheerio=require("cheerio");
//data extract->cheerio
console.log("before");
request(url,cb);
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
    let elemRepArr = searchTool(".match-comment-wrapper .match-comment-long-text");
    //text
    let lbc=searchTool(elemRepArr[0]).text();
    console.log("lbc : ",lbc);

}
console.log("after");