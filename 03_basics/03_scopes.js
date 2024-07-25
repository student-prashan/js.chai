//var c =300
let a=300
if (true) {
    let a=10
    const b=20
    //console.log("inner:",a);
    
}

//console.log(a);
//console.log(b);
//console.log(c);



function one() {
    const username="ram"
           
     function two () {
        const website="youtube"
        //console.log(username);
     }
     //two()
    
}
//one()

if(true){
    const username="rishab"
    if(username === "rishab"){
        const website=" youtube"
        //console.log(username+website);
    }
//console.log(website);
}

//console.log(username);


// ****************************************interesting*****************************************

console.log(addone(5));

function addone(num) {
    return num+1
    
}

addtwo(5)
const addtwo=function(num){     // hoisting
    return num+2
}

