//  stack (primitive), heap (non-primitive)

//stack concept

let myyoutubename ="hcvlog"

let anothername = myyoutubename
 anothername="chai aur code"

 console.log(myyoutubename);
 console.log(anothername);

 // heap concept
 let userone ={
    email:"user@google.com",
    upi:"user@ybl"

}

let usertwo=userone

usertwo.email="dev@google.com"

console.log(userone.email);
console.log(usertwo.email);