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
    
    // let html="";
    // for(let i=0;i<bowlers.length;i++){
    //     html+=searchTool(bowlersTable[i]).html;
    // }
    // fs.writeFileSync("table.txt",html);

    let name ="";
    let wickets = 0;

    for(let i=0;i<bowlers.length;i++){
        let cols=searchTool(bowlers[i]).find("td");
        
        if(searchTool(cols[4]).text()>wickets){
            wickets=searchTool(cols[4]).text();
            name=searchTool(cols[0]).text();
        }
        console.log(searchTool(cols[0]).text()+" : "+searchTool(cols[4]).text())
    }
    console.log("**********HWT***********");
    console.log(name+" : "+wickets);

}
console.log("after");