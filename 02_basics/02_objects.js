

const mysym= Symbol("key1")


const jsuser={
    name:"dev",
    "full name":"dev jat",
    [mysym]:"mykey1",
    age:19,
    email:"dev@jat.com",

}

console.log(jsuser.email)
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log(jsuser[mysym]);

jsuser.email="dev@cut.com"
//Object.freeze(jsuser)
jsuser.email="dev@vbnm.com"
console.log(jsuser);

jsuser.greeting=function(){
    console.log("hello js user");
}

jsuser.greetingtwo=function(){
    console.log(`hello js user, ${this.name}`); //--> interpolation
}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());

