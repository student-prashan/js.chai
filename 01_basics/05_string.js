const name= "rishab "
const repocount=50

console.log(name + repocount + " value");

console.log(`hello my name is ${name} and my repocount is ${repocount}`);

const game = new String('rishab')


console.log(game[0]);
console.log(game.__proto__);

console.log(game.length);
console.log(game.toUpperCase());
 console.log(game.charAt(2));
 console.log(game.indexOf("s"));

 const newstring = game.substring(0, 4)
 console.log(newstring);

 const anotherstring =game.slice(-6, 4)
 console.log(anotherstring);

 const newstringone="   rishab    "
 console.log(newstringone);
 console.log(newstringone.trim());

 const url="https://rishab.com/rishab%20pandey"
 console.log(url.replace('%20', '-'))

 console.log(url.includes('love'));
 
 console.log(game.split('-'));