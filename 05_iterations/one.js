//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element==6){
        console.log("6 is the best number")
    }
    console.log(element);
}

for (let i= 0; i<=10; i++) {
    console.log(`outer loop value: ${i}`);
    for (let j = 0; j <=10; j++) {
        console.log(`inner loop value ${j} and inner loop ${i}`);
        console.log(i + '*' +j + '=' +i * j);
        
    }
    
}

let myarr=["ram", "shyam", "hen"]
console.log(myarr.length);
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    console.log(element);
    
}

for (let index = 1; index <=20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        break
    }
    console.log(`value of i is ${index}`);
}

for (let index = 1; index <=20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue                      // ek bar maaf 
    }
    console.log(`value of i is ${index}`);
}
