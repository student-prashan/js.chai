const user={
    username:"rishab",
    price:999,
                                       // THIS --> current context
    welcomemessage: function () {
        console.log(`${this.username},welcome to website`);
        //console.log(this);
        
    }
}

//user.welcomemessage()
//user.username="azad"
//user.welcomemessage()

//console.log(this);

//function chai() {
//    let username="rishab"
//    console.log(this.username);
//}
//
//chai()
//
//const chai= function () {
//    let username="rishab"
//    console.log(this.username);
//    
//}
                        
const chai=  () => {              //ARROW FUNCTION
       let username="rishab"
        console.log(this); 
}

chai()

//ARROE FUNCTION

//implicit return

//const addtwo= (num1,num2)=>{
//    return num1+num2
//
//};

//const addtwo= (num1,num2)=> num1+num2
const addtwo= (num1,num2)=> (num1+num2)

const addtwo= (num1,num2)=> ({username:"rishab"})
     

console.log(addtwo(4,5));