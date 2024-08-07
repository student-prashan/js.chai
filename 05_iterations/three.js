const myobject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:"apple"
}

// FOR IN ->> 
for (const key in myobject) {
   // console.log(`${key} shortcut is for ${myobject[key]}`);
    
}

const programing =["js", "rb", "py", "java", "cpp"]

for (const key in programing) {
   //console.log(programing[key]);
   
}

// FOR EACH

const coding =["js", "ruby", "java", "cpp"]

coding.forEach(function (val) {
    //console.log(val);
    
}) // CALLBACK FUNCTION --> NAME NAHI H
  
coding.forEach( (item)=> {
   // console.log(item);   
})

function printme(tem) {
    console.log(tem);
    
}

//coding.forEach(printme)

coding.forEach((bu , du, nu,jj)=>{
    console.log(bu , du, nu, jj );
    
})
