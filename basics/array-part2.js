const marvel_heros = ["spidermen", "Ironmen", "thor"];
const dc_heros = ["supermen", "flash", "batmen"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1])

// const newArr = marvel_heros.concat(dc_heros);

// console.log(newArr);

// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = anotherArray.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Rohit"));
console.log(Array.from("Rohit"));

console.log(Array.from({name:"Rohit"}))    //interesting Concepts


let score1 = 100
let score2 = 200 
let score3 = 300

console.log(Array.of(score1, score2, score3))