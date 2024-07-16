//primitive

// 7 types : string, number , boolean, null , undefined, symbol, bigint

const score= 100;
const scorevalue=100.3;

const loggedin= false;
const outsidetemp= null;
let useremail;

const id= symbol('123')
const anotherid= symbol('123')

//console.log(id=== anotherid);

const bignumber =57489398543099n


// reference (non primitive)

// array , objects, functions

const heroes = ["johnny", "denny", "mia"]
let myobj={
    name:"prashant",
    age:22,

}

const myfunction= function(){
    console.log("hello world");
}

console.log(typeof myfunction);