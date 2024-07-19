//Dates

let mydate= new Date()
console.log(mydate.toString());
console.log(mydate.toDateString);
console.log(mydate.toLocaleString);
console.log(typeof mydate);

//let mycreatedDate = new Date(2023,0,23)


//let mycreatedDate = new Date(2023,0,23,5,3)
  let mycreatedDate= new Date("01-14-2023")
console.log(mycreatedDate.toLocaleString());

let mytimestamp=Date.now()

//console.log(mytimestamp);
//console.log(mycreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth());
console.log(newdate.getDay());

`${newdate.getDay()}`  

newdate.toLocaleString('default',{
  weekday: "long",
})
 
