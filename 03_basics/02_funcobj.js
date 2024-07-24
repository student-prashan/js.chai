function calculatecartprice(val1, val2, ...num1) {
    return num1
}

//console.log(calculatecartprice(200,400,700,355));

const user ={
             username:"rishab",
             prices:222
}

function handleobj(anyobj) {
    console.log(`username is ${anyobj.username} and price is ${anyobj.prices}`);
    
}

//handleobj(user)
handleobj({
    username:"sam",
    prices:344
})

const mynewarray=[200,899,555]

function returnsecondvalue(getarray) {
    return getarray[1];
    
}

//console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue([5,8,9]));