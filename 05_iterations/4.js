const coding= ["js", "ruby", "cpp"]

 const values =coding.forEach( (item) => {
  //      console.log(item);
        return item
})

//console.log(values);

const mynums=[1,2,3,4,5,6,7,8,9,0]

//const newnums= mynums.filter((num)=> num > 4) 
 //console.log(newnums)
 
 //const newnums= mynums.filter((num)=> {      // scope is open here so we have to return
 //   return num > 4
 //})
 //console.log(newnums)

 const newnums=[]

 mynums.forEach((num)=>{
   if(num>4){
      newnums.push(num)
      
   }
 })

 console.log(newnums);
 
 