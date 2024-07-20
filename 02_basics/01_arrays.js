// array 
 const myarr =[0,2,3,4,5]
 const myheros= ["shaktiman", "nagraj"]

 //const myarr2= new array(1,2,3,4)
// console.log(myarr[1]);

 // array methods

// myarr.push(9)
// myarr.push(3)
// myarr.pop()

 //myarr.unshift(7)
//myarr.shift()
//myarr.shift()
//myarr.pop()

//console.log(myarr.includes(8));
//console.log(myarr.indexOf(8));

const newarr= myarr.join()

 //console.log(myarr);
 //console.log(newarr);

 // slice, splice
  
 //console.log("A", myarr);
 const myn1 =myarr.slice(1,3)
 //console.log(myn1);
//
 //console.log("B", myarr);
//
 //const myn2= myarr.splice(1,3)
 //console.log("C", myarr)

//Console.log(myn2);

const marvel_heros= ["spider", "bat", "super"]
const dc_heros=["dev", "mev", "sev"]

//marvel_heros.push(dc_heros)

//const all_heros=marvel_heros.concat(dc_heros)
//console.log(all_heros);


                     //spread operator
const all_new_heros=[...marvel_heros, ...dc_heros]
//console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array= another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("rishab"));
console.log(Array.from("rishab"));
console.log(Array.from({name:"hitesh"})); //interesting facts

let sc1=77
let sc2=88
let sc3=99

console.log(Array.from(sc1,sc2,sc3));




 
 
