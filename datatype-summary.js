// premitive datatypes

//  7 types : String, Number, Null, Undefined, BigInt, Boolean, Symbol


    const score = 100
    const scoreValue = 100.3
    const isLoggedIn = false
    const outSideTemp = null
    let userEmail;

    const id = Symbol('123')
    const anotherId = Symbol('123')

    // console.log(id === anotherId)

    const bigNumber = 6546231346646464321




// Reference (Non Premitive)

// Array , Objects, Functions

const heros = ["Shaktiman", "Doremon", "Ironman"];

const myObj = {
    name : "John",
    age : 22,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof myFunction)


//+++++++++++++++++++++++++++++++++++++++++++++++

// stack (premitive) , Heap (Non-Premitve)

let myYouTube = "Rohitkumarrai"
let anotherName = myYouTube

anotherName = "Thegreatrohit"

console.log(myYouTube)
console.log(anotherName)

let userOne = {
    Email : "rohit@gmai.com",
    upi : "user@ybl",
}

let userTwo = userOne

userTwo.Email = "thegreategmail.com"

console.log(userOne.Email)
console.log(userTwo.Email)

