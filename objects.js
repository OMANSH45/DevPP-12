//Objects->key value pair
let obj={};
//key->string/number but value can be anything
let cap={
    name:"Steve",
    lName:"Rogers",
    age:34,
    friends:["Peter","Bruce","Tony"],
    isAvenger:true,
    sayHi:function(){
        console.log("cap Say's Hi");
    },
    address:{
        state:"New York",
        city:"NY City"
    }
}
console.log(cap.name);
console.log(cap.age);
cap.friends.push("vision");
console.log(cap.friends);
cap.sayHi();

//Remember when to use DOT and SQUARE in Objects
let varName="address";
console.log("address",cap[varName]);//not cap.varName(varName is not a key)

//loop in object
for(let key in cap){
    console.log(key," : ",cap[key]);
}
console.log(cap.address);

//Insert key-value
cap.movies=['first Avenger','civil war'];

//Set or update
cap.age=45;

//delete
delete cap.address.city;
delete cap.address;

for(let key in cap){
    console.log(key," : ",cap[key]);
}
    


