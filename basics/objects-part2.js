// const tinderUser = new Object();    //this is singleton object 
tinderUser = {}                        // this is non-singleton objects

    tinderUser.id = "123abc";
    tinderUser.name = "Sizuka"
    tinderUser.isLoggedIn = false;


// console.log(tinderUser);

const regularUser = {
    email: "rohit@google.com",
    fullname:{
        userfullname: {
            firstname:"Rohit",
            lastname:"Kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1, obj2}

    // const obj3 = Object.assign({}, obj1, obj2)

    const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users = [
    {
        id : 1,
        email: "rohit@microsoft.com",
    },
    {
        id : 1,
        email: "rohit@microsoft1.com",
    },
    {
        id : 1,
        email: "rohit@microsoft.com",
    },
    {
        id : 1,
        email: "rohit@microsoft.com",
    },
]

console.log(users[1].email);
console.log(tinderUser)
console.log(Object.keys(tinderUser))

console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLogged'))    //how to check value exist or not