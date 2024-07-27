const useremail=[]

if(useremail){
    console.log("got user email");
}

else{
    console.log("dont have user email");
}

// FALSY values

// false, 0, -0, bigint 0n, "", null, undefined, NaN

// TRUUTHY values

// "0" 'false', " ", [], {}, function(){}

if(useremail.length ===0){
    console.log("array is empty");
}

const emptyobj ={}

if (Object.keys(emptyobj).length===0) {
    console.log("object is empty");
    
}
 

// NULLISH COALESCING OPERATOR (??): null defined

let val1;
//val1 = 5 ?? 10
//val1= null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 55


console.log(val1);

//ternary operator
// condition ? true : false

const icetea=100
icetea <= 80 ? console.log("less than 80"): console.log("more than 80");