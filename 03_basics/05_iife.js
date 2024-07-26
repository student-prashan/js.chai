//immediately invoed function expressions (iife) --> the function which immediately executed

(function chai() {
    // named iife
    console.log("DB CONNECTED");
    
})(); //END BY SEMCOLN

( (name)=>{
    console.log(`DB CONNECTED TWO ${name} `)
})('rishab')

