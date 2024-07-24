function saymyname() {
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("B");
    
}

//saymyname()

//function addtwonumbers(num1, num2){
//    console.log(num1+num2);
//}


function addtwonumbers(num1, num2){
    //let result= num1+num2
    //return result
   return num1+num2
}

const result = addtwonumbers(3,8)

//console.log("Result: ", result); 

function loginusermessage(username){
    if(!username){
        console.log("plz enter a username");
        return
    }
    return `${username} just logged in `
}

//console.log(loginusermessage("rishab"));
console.log(loginusermessage());