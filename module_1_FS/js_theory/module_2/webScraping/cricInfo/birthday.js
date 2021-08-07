let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard";

//npm i request
let request=require("request");
//npm i cheerio
let cheerio=require("cheerio");
const { fstat } = require("fs");
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
    
    let bowlers = searchTool(".table.bowler tbody tr");
    

    for(let i=0;i<bowlers.length;i++){
        let cols=searchTool(bowlers[i]).find("td");
        
        let aElem=searchTool(cols[0]).find("a");
        let link=aElem.attr("href");
        let fullLink="https://www.espncricinfo.com"+link;
        request(fullLink,newcb);

}
}
function newcb(error,response,html){
    if(error){
        console.log(error);

    }else if(response.statusCode==404){
        console.log("Page Not Found");

    }else{
        console.log("``````````````````````");
        getBirthday(html);

    }
}
function getBirthday(html){
    let searchTool = cheerio.load(html);
    let headingArr=searchTool(".player-card-description");
    let name=searchTool(headingArr[0]).text();
    let age=searchTool(headingArr[2]).text();
    console.log(name+" : "+age)

}

console.log("after");

