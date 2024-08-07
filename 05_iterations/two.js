// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr= [1,2,3,4,5]

for (const i of arr) {
    console.log(i);
}

const greetings="hello world"
for (const greet of greetings) {
    //console.log(` char is ${greet}`);
    
}

//MAPS

const map = new Map()
map.set('IN', "india")
map.set('USA', "united states of america")
map.set('fr',  "france")
map.set('IN', "india")

//console.log(map);

//for (const [key, value] of map) {
   // console.log(key, ':-', value);
    
//}

const myobject={
    game:'nfs',
    'game2':'spiderman'
}

// FOR OF --> SIDHE VALUE UTHATA H
for (const [key, value] of myobject) {
    console.log(key, ':-', value);
    
}
