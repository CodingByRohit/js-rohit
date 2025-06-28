const myArr = [0,1,2,3,4,5]
const myHeros = ['shaktiman', "nagarjun"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(0)
// myArr.unshift(9)
// myArr.shift()



// console.log(myArr.includes(9));
// console.log(myArr.indexOf(12));

    const newArr = myArr.join();

// console.log(myArr)
// console.log(newArr);

// slice and splice

console.log("A ", myArr);
const mynew1 = myArr.slice(1, 3);
console.log("B ", myArr);
console.log(mynew1);

const myn2 = myArr.splice(1, 3);
console.log("c ", myArr);
console.log(myn2);
