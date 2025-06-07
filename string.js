// Better Analysis String Concepts using mdn Documentation


const name = "Rohit"
const repoCount = 50

// console.log(name + repoCount + " Value");
 console.log(`My name is ${name} and My repo Count is ${repoCount}`);

 const gameName = new String('Rohit')

//  console.log(gameName[0]);
//  console.log(gameName.__proto__);


//  console.log(gameName.length);

//  console.log(gameName.toUpperCase());
 
//  console.log(gameName.charAt(2));

//  console.log(gameName.indexOf('h'));

 const newString = gameName.substring(0, 4)
 console.log(newString);

 const anotherString = gameName.slice(-4, 4)
 console.log(anotherString);

 const newStringOne = "     Rohit    "
 console.log(newStringOne);
 console.log(newStringOne.trim());

 const url = "https://www.w3schools rohit.com/"
 console.log(url.replace(" ", "-"))
 console.log(url.includes('rohit'))

 const anotherGameName = "Rohit-Kumar-Rai"
 console.log(anotherGameName.split('-'))