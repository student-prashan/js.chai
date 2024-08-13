const mynums=[1,2,3,4]

const mytotal= mynums.reduce(function(acc,currval){
    //console.log(`acc:${acc}, currval:${currval}`);
    return acc + currval
    
},0)

const myytotal= mynums.reduce((acc, currval)=> acc+currval,0)

//console.log(myytotal);

const shoppingcart=[
    {
        itemname:"js course",
        price:2999
    },
    {
        itemname:"py course",
        price:1999
    },
    {
        itemname:"web course",
        price:4999
    },
    {
        itemname:"dsa course",
        price:3999
    },
]

const pricetopay= shoppingcart.reduce((acc,item)=>acc + item.price,0)

console.log(pricetopay);
